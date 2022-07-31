import { invoke } from '@tauri-apps/api/tauri'
import { IFileInfo, IDirectoryRepository } from '../types'

interface IFetchAllResponse {
    success: boolean
    payload: IFileInfo[]
    err_msg: string
}

interface IFetchResponse {
    success: boolean
    payload: IFileInfo
    err_msg: string
}

class DirectoryTauriCommand implements IDirectoryRepository {
    public async fetchAll(): Promise<IFileInfo[]> {
        const { success, payload, err_msg }: IFetchAllResponse = await invoke('get_directories')

        if (!success) throw new Error(err_msg)

        return payload
    }

    public async add(path: string): Promise<IFileInfo> {
        const { success, payload, err_msg }: IFetchResponse = await invoke('add_directory', { path })

        if (!success) throw new Error(err_msg)

        return payload
    }

    public async delete(path: string): Promise<IFileInfo> {
        const { success, payload, err_msg }: IFetchResponse = await invoke('delete_directory', { path })

        if (!success) throw new Error(err_msg)

        return payload
    }
}

export { DirectoryTauriCommand }
