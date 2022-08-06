import { nanoid } from '@reduxjs/toolkit'
import { Howl } from 'howler'
import { PlaybackType, PLAYBACK_TYPE } from '../../types'

export class BasePlayback {
    constructor() {
        this.id = nanoid()

        this.type = PLAYBACK_TYPE.UNKNOWN

        this.handler = new Howl({
            src: [],
        })
    }

    public play() {
        this.handler.play()
    }

    public pause() {
        this.handler.pause()
    }

    public stop() {
        this.handler.stop()
    }

    public seek(sec: number) {
        this.handler.seek(sec)
    }

    public destroy() {
        this.handler.unload()
    }

    public get currentTime(): number {
        return this.handler.seek()
    }

    public get currentTimeMillis(): number {
        return this.handler.seek() * 1000.0
    }

    public get instanceId(): string {
        return this.id
    }

    public get instanceType(): PlaybackType {
        return this.type
    }

    public handler: Howl

    protected id: string

    protected type: PlaybackType
}
