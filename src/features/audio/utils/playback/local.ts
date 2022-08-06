import { IFileInfo } from '@/types'
import { convertFileSrc } from '@tauri-apps/api/tauri'
import { Howl } from 'howler'
import { PLAYBACK_TYPE } from '../../types'
import { BasePlayback } from './base'

export class PlaybackLocalFile extends BasePlayback {
    constructor(file: IFileInfo) {
        super()

        this.type = PLAYBACK_TYPE.LOCAL_FILE

        this.handler = new Howl({
            src: [convertFileSrc(file.file_path)],
            volume: 1.0,
            html5: file.file_size > 10000,
            loop: false,
            preload: true,
        })
    }
}
