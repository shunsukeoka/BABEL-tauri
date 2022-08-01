import { IFileInfo } from '@/types'
import { convertFileSrc } from '@tauri-apps/api/tauri'
import { Howl } from 'howler'
import * as React from 'react'

export const useAudioPlayback = () => {
    const [currentFile, setCurrentFile] = React.useState<IFileInfo>()

    const play = React.useCallback((info: IFileInfo | undefined) => {
        if (!info) return

        const sound = new Howl({
            src: [convertFileSrc(info.file_path)],
            html5: true,
            onplay: () => {
                setCurrentFile(info)
            },
            onend: () => {
                setCurrentFile(undefined)
            },
        })

        sound.play()
    }, [])

    return { currentFile, setCurrentFile, play }
}
