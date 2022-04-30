import { FileBrowserTauriCommand } from '../backend/FileBrowserTauriCommand'
import { IFileInfo } from '../interfaces/file'
import { IFileBrowserRepository } from '../repositories/FileBrowserRepository'

class FileBrowserService {
    constructor() {
        this.repository = new FileBrowserTauriCommand()
    }

    public async fetch(path: string): Promise<IFileInfo[]> {
        return this.repository.fetch(path)
    }

    private repository: IFileBrowserRepository
}

export { FileBrowserService }
