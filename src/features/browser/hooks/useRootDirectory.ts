import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { container } from '../di'
import { RootDirectoryEntity } from '../entities/root-directory-entity'
import { RootDirectoryService } from '../services'
import { DI_TOKEN } from '../types'

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
