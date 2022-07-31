import * as React from 'react'

export const useAudioPlayback = () => {
    const [currentFile, setCurrentFile] = React.useState<string>('')

    const play = React.useCallback((path: string) => {
        console.log(path)
        setCurrentFile(path)
        // TODO: play sound file.
    }, [])

    return { currentFile, setCurrentFile, play }
}
