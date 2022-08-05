import { IFileInfo } from '@/types'
import { Result } from 'neverthrow'

export interface IDirectoryRepository {
    add: (path: string) => Promise<Result<IFileInfo, Error>>
    delete: (path: string) => Promise<Result<IFileInfo, Error>>
}

export interface IFileBrowserRepository {
    fetch: (path: string) => Promise<Result<IFileInfo[], Error>>
}
