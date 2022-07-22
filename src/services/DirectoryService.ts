import { DirectoryTauriCommand } from '../backend/DirectoryTauriCommand'
import { IFileInfo } from '../interfaces/file'
import { IDirectoryRepository } from '../repositories/DirectoryRepository'

class DirectoryService {
    constructor() {
        this.repository = new DirectoryTauriCommand()
    }

    public async fetchAll(): Promise<IFileInfo[]> {
        return this.repository.fetchAll()
    }

    public async add(path: string): Promise<IFileInfo> {
        return this.repository.add(path)
    }

    public async delete(path: string): Promise<IFileInfo> {
        return this.repository.delete(path)
    }

    private repository: IDirectoryRepository
}

export { DirectoryService }
