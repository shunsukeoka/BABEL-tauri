import { invoke } from '@tauri-apps/api/tauri'
import { IFileBrowserRepository } from '@/repositories/FileBrowserRepository'
import { IFileInfo } from '@/interfaces/file'

interface IResponse {
    success: boolean
    data: IFileInfo[]
    err_msg: string
}

class FileBrowserTauriCommand implements IFileBrowserRepository {
    public async fetch(path: string): Promise<IFileInfo[]> {
        const { success, data, err_msg }: IResponse = await invoke('get_directory_info', { path })

        if (!success) throw new Error(err_msg)

        return data
    }
}

export { FileBrowserTauriCommand }
