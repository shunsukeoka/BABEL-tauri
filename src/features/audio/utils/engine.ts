import { IFileInfo } from '@/types'
import { BasePlayback } from './playback/base'
import { PlaybackLocalFile } from './playback/local'

export class AudioEngine {
    constructor() {
        this.instances = []
        this.isMute = false

        Howler.usingWebAudio = true
    }

    public setupPlaybackLocalFile(file: IFileInfo): PlaybackLocalFile {
        const instance = new PlaybackLocalFile(file)

        this.instances.push(instance)

        return instance
    }

    public checkSupportedCodec(ext: string): boolean {
        return Howler.codecs(ext)
    }

    public stopAll() {
        Howler.stop()
    }

    public toggleMute() {
        if (this.isMute) {
            Howler.mute(false)
            this.isMute = false
        } else {
            Howler.mute(true)
            this.isMute = true
        }
    }

    public destroyAll() {
        Howler.stop()
        Howler.unload()
        this.instances = []
    }

    public getInstance(id: string): BasePlayback | undefined {
        return this.instances.find((ins) => ins.instanceId === id)
    }

    public get playbackInstances(): BasePlayback[] {
        return this.instances
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

    private instances: BasePlayback[]

    private isMute: boolean
}
