import { IFileInfo } from '@/interfaces/file'

export interface IFileBrowserRepository {
    fetch: (path: string) => Promise<IFileInfo[]>
}
