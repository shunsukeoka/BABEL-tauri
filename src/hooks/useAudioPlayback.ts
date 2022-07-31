import { IFileInfo } from '@/types'
import * as React from 'react'

export const useAudioPlayback = () => {
    const [currentFile, setCurrentFile] = React.useState<IFileInfo>()

    const play = React.useCallback((info: IFileInfo | undefined) => {
        if (!info) return
        console.log(info)
        setCurrentFile(info)
        // TODO: play sound file.
    }, [])

    return { currentFile, setCurrentFile, play }
}
