import { useMutation, useQuery } from '@tanstack/react-query'
import { container } from '../di'
import { RootDirectoryEntity } from '../entities/root-directory-entity'
import { RootDirectoryService } from '../services'
import { DI_TOKEN } from '../types'

export const useRootDirectory = () => {
    const rootDirectory = useQuery<RootDirectoryEntity[]>(['rootDirectory'], () =>
        container.resolve<RootDirectoryService>(DI_TOKEN.RootDirectoryService).findAll(),
    )

    const rootDirectoryFindMutation = useMutation((id: number) =>
        container.resolve<RootDirectoryService>(DI_TOKEN.RootDirectoryService).find(id),
    )

    const addRootDirectoryMutation = useMutation((path: string) =>
        container.resolve<RootDirectoryService>(DI_TOKEN.RootDirectoryService).create(path),
    )

    return { rootDirectory, rootDirectoryFindMutation, addRootDirectoryMutation }
}
