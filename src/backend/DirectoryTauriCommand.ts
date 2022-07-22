import { invoke } from '@tauri-apps/api/tauri'
import { IFileInfo } from '../interfaces/file'
import { IDirectoryRepository } from '../repositories/DirectoryRepository'

interface IFetchAllResponse {
    success: boolean
    data: IFileInfo[]
    err_msg: string
}

interface IFetchResponse {
    success: boolean
    data: IFileInfo
    err_msg: string
}

class DirectoryTauriCommand implements IDirectoryRepository {
    public async fetchAll(): Promise<IFileInfo[]> {
        const { success, data, err_msg }: IFetchAllResponse = await invoke('get_directories')

        if (!success) throw new Error(err_msg)

        return data
    }

    public async add(path: string): Promise<IFileInfo> {
        const { success, data, err_msg }: IFetchResponse = await invoke('add_directory', { path })

        if (!success) throw new Error(err_msg)

        return data
    }

    public async delete(path: string): Promise<IFileInfo> {
        const { success, data, err_msg }: IFetchResponse = await invoke('delete_directory', { path })

        if (!success) throw new Error(err_msg)

        return data
    }
}

export { DirectoryTauriCommand }
