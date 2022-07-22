import { IFileInfo } from '../interfaces/file'

export interface IDirectoryRepository {
    fetchAll: () => Promise<IFileInfo[]>
    add: (path: string) => Promise<IFileInfo>
    delete: (path: string) => Promise<IFileInfo>
}
