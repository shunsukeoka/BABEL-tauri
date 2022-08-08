import { IFileInfo } from '@/types'
import { BasePlayback } from './playback/base'
import { PlaybackLocalFile } from './playback/local'

export class AudioEngine {
    constructor() {
        this.playback = undefined
        this.isMasterMute = false

        Howler.usingWebAudio = true
    }

    public setupPlaybackLocalFile(file: IFileInfo): PlaybackLocalFile {
        this.playback = new PlaybackLocalFile(file)

        return this.playback
    }

    public checkSupportedCodec(ext: string): boolean {
        return Howler.codecs(ext)
    }

    public stopAll() {
        Howler.stop()
    }

    public toggleMaterMute() {
        if (this.isMasterMute) {
            Howler.mute(false)
            this.isMasterMute = false
        } else {
            Howler.mute(true)
            this.isMasterMute = true
        }
    }

    public destroy() {
        Howler.stop()
        Howler.unload()
    }

    public get playbackInstance(): BasePlayback | undefined {
        return this.playback
    }

    public get context(): AudioContext {
        return Howler.ctx
    }

    public get masterVolume(): number {
        return Howler.volume()
    }

    public set masterVolume(vol: number) {
        Howler.volume(vol)
    }

    private playback: BasePlayback | undefined

    private isMasterMute: boolean
}
