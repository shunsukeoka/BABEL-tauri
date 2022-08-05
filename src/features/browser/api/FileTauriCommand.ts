import { IFileInfo, IResponse } from '@/types'
import { invoke } from '@tauri-apps/api/tauri'
import { err, ok, Result } from 'neverthrow'
import { IFileBrowserRepository } from '../types'

class FileTauriCommand implements IFileBrowserRepository {
    public async fetch(path: string): Promise<Result<IFileInfo[], Error>> {
        try {
            const { success, payload, err_msg } = await invoke<IResponse<IFileInfo[]>>('get_directory_info', { path })

            if (!success) err(new Error(err_msg))

            return ok(payload)
        } catch (error) {
            return err(new Error('ファイルリストの取得に失敗しました。'))
        }
    }
}

export { FileTauriCommand }
