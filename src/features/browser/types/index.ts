import { IFileInfo } from '@/types'
import { Result } from 'neverthrow'

export const DI_TOKEN = {
    IRootDirectoryRepository: Symbol.for('IRootDirectoryRepository'),
    RootDirectoryService: Symbol.for('RootDirectoryService'),
} as const

export interface IFileBrowserRepository {
    fetch: (path: string) => Promise<Result<IFileInfo[], Error>>
}
