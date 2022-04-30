import { invoke } from '@tauri-apps/api/tauri'
import { IFileInfo } from '../interfaces/file'
import { IFileBrowserRepository } from '../repositories/FileBrowserRepository'

interface IResponse {
    success: boolean
    data: IFileInfo[]
}

class FileBrowserTauriCommand implements IFileBrowserRepository {
    public async fetch(path: string): Promise<IFileInfo[]> {
        const { data }: IResponse = await invoke('get_directory_info', { path })

        return data
    }
}

export { FileBrowserTauriCommand }
