import { IFileInfo, IResponse } from '@/types'
import { invoke } from '@tauri-apps/api/tauri'
import { err, ok, Result } from 'neverthrow'
import { IDirectoryRepository } from '../types'

class DirectoryTauriCommand implements IDirectoryRepository {
    public async add(path: string): Promise<Result<IFileInfo, Error>> {
        try {
            const { success, payload, err_msg } = await invoke<IResponse<IFileInfo>>('add_directory', { path })

            if (!success) err(new Error(err_msg))

            return ok(payload)
        } catch (error) {
            return err(new Error('ディレクトリの追加に失敗しました。'))
        }
    }

    public async delete(path: string): Promise<Result<IFileInfo, Error>> {
        try {
            const { success, payload, err_msg } = await invoke<IResponse<IFileInfo>>('delete_directory', { path })

            if (!success) err(new Error(err_msg))

            return ok(payload)
        } catch (error) {
            return err(new Error('ディレクトリの削除に失敗しました。'))
        }
    }
}

export { DirectoryTauriCommand }
