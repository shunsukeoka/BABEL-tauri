import { changeCurrentSound } from '@/slice/audioPlaybackSlice'
import { IFileInfo } from '@/types'
import { convertFileSrc } from '@tauri-apps/api/tauri'
import { Howl } from 'howler'
import { useDispatch } from 'react-redux'

export const useAudioPlayback = () => {
    const dispatch = useDispatch()

    const play = (info: IFileInfo | undefined) => {
        if (!info) return

        console.log(convertFileSrc(info.file_path))

        const sound = new Howl({
            src: [convertFileSrc(info.file_path)],
            html5: true,
            preload: true,
            onload: () => {
                dispatch(changeCurrentSound(info))
            },
            onloaderror: (id, err) => {
                // FIXME: MEDIA_ERR_SRC_NOT_SUPPORTED occurs when using audio tag on macOS
                console.warn('failed to load sound file:', { id, err })
            },
            onend: () => {
                dispatch(changeCurrentSound(undefined))
            },
        })

        console.log(sound)

        sound.play()
    }

    return { play }
}
