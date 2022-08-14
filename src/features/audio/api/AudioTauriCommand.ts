import { invoke } from '@tauri-apps/api/tauri'
import { err, ok, Result } from 'neverthrow'
import { PlaybackState } from '../types'

class AudioTauriCommand {
    public async playSoundFile(path: string): Promise<Result<boolean, Error>> {
        try {
            await invoke('play', { path })

            return ok(true)
        } catch (error) {
            return err(new Error('サウンドファイルの再生に失敗しました。'))
        }
    }

    public async pauseSoundFile(): Promise<Result<boolean, Error>> {
        try {
            await invoke('pause')

            return ok(true)
        } catch (error) {
            return err(new Error('サウンドファイルの一時停止に失敗しました。'))
        }
    }

    public async resumeSoundFile(): Promise<Result<boolean, Error>> {
        try {
            await invoke('resume')

            return ok(true)
        } catch (error) {
            return err(new Error('サウンドファイルの再生再開に失敗しました。'))
        }
    }

    public async stopSoundFile(): Promise<Result<boolean, Error>> {
        try {
            await invoke('stop')

            return ok(true)
        } catch (error) {
            return err(new Error('サウンドファイルの停止に失敗しました。'))
        }
    }

    public async seekSoundFile(sec: number): Promise<Result<boolean, Error>> {
        try {
            await invoke('seek', { sec })

            return ok(true)
        } catch (error) {
            return err(new Error('サウンドファイルのシークに失敗しました。'))
        }
    }

    public async getPlaybackState(): Promise<Result<PlaybackState, Error>> {
        try {
            const state = await invoke<PlaybackState>('get_playback_state')

            return ok(state)
        } catch (error) {
            return err(new Error('サウンドファイルの再生状態を取得できませんでした。'))
        }
    }
}

export { AudioTauriCommand }
