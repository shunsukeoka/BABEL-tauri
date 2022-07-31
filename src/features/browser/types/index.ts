import { IFileInfo } from '@/types'

export interface IDirectoryRepository {
    fetchAll: () => Promise<IFileInfo[]>
    add: (path: string) => Promise<IFileInfo>
    delete: (path: string) => Promise<IFileInfo>
}

export interface IFileBrowserRepository {
    fetch: (path: string) => Promise<IFileInfo[]>
}
