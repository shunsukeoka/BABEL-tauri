import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { RootDirectoryEntity } from '@/core/entities/root-directory-entity'
import { RootDirectoryService } from '@/core/services'
import { DI_TOKEN } from '@/core/types'
import { container } from '../di'

const QueryKey = Symbol.for('rootDirectory')

export const useRootDirectory = () => {
    const queryClient = useQueryClient()

    const query = useQuery<RootDirectoryEntity[]>([QueryKey], () =>
        container.resolve<RootDirectoryService>(DI_TOKEN.RootDirectoryService).findAll(),
    )

    const find = useMutation((id: number) =>
        container.resolve<RootDirectoryService>(DI_TOKEN.RootDirectoryService).find(id),
    )

    const add = useMutation(
        (path: string) => container.resolve<RootDirectoryService>(DI_TOKEN.RootDirectoryService).create(path),
        {
            onSuccess: (response: RootDirectoryEntity) => {
                if (query.data) queryClient.setQueryData<RootDirectoryEntity[]>([QueryKey], [...query.data, response])
            },
        },
    )

    return {
        rootDirectory: {
            query,
            find,
            add,
        },
    }
}
