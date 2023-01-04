import { injectable } from 'tsyringe'
import { RootDirectory } from '@/types'
import { tauriClient } from '@/utils/client'

export interface IRootDirectoryRepository {
    findAll: () => Promise<RootDirectory[]>
    find: (id: number) => Promise<RootDirectory | null>
    create: (path: string) => Promise<RootDirectory>
}

@injectable()
class TauriRootDirectoryRepository implements IRootDirectoryRepository {
    public findAll(): Promise<RootDirectory[]> {
        return tauriClient.query(['root_directory.findAll'])
    }

    public find(id: number): Promise<RootDirectory | null> {
        return tauriClient.query(['root_directory.find', id])
    }

    public create(path: string): Promise<RootDirectory> {
        return tauriClient.mutation(['root_directory.create', path])
    }
}

export { TauriRootDirectoryRepository }
