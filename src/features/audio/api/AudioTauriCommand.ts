import { invoke } from '@tauri-apps/api/tauri'
import { err, ok, Result } from 'neverthrow'
import { PlaybackState } from '../types'

class AudioTauriCommand {
    public playSoundFile(path: string): Result<boolean, Error> {
        try {
            invoke('play', { path })

            return ok(true)
        } catch (error) {
            return err(new Error('サウンドファイルの再生に失敗しました。'))
        }
    }

    public pauseSoundFile(): Result<boolean, Error> {
        try {
            invoke('pause')

            return ok(true)
        } catch (error) {
            return err(new Error('サウンドファイルの一時停止に失敗しました。'))
        }
    }

    public resumeSoundFile(): Result<boolean, Error> {
        try {
            invoke('resume')

            return ok(true)
        } catch (error) {
            return err(new Error('サウンドファイルの再生再開に失敗しました。'))
        }
    }

    public stopSoundFile(): Result<boolean, Error> {
        try {
            invoke('stop')

            return ok(true)
        } catch (error) {
            return err(new Error('サウンドファイルの停止に失敗しました。'))
        }
    }

    public seekSoundFile(sec: number): Result<boolean, Error> {
        try {
            invoke('seek', { sec })

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
