import { IFileInfo } from '@/types'
import { invoke } from '@tauri-apps/api/tauri'
import { IFileBrowserRepository } from '../types'

interface IResponse {
    success: boolean
    payload: IFileInfo[]
    err_msg: string
}

class FileTauriCommand implements IFileBrowserRepository {
    public async fetch(path: string): Promise<IFileInfo[]> {
        const { success, payload, err_msg }: IResponse = await invoke('get_directory_info', { path })

        if (!success) throw new Error(err_msg)

        return payload
    }
}

export { FileTauriCommand }
