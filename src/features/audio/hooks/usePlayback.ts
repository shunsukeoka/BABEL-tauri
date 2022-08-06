import { changeCurrentSound } from '@/slice/audioPlaybackSlice'
import { IFileInfo } from '@/types'
import { useDispatch } from 'react-redux'
import { audioEngine } from '../utils'

export const usePlayback = () => {
    const dispatch = useDispatch()

    const playSoundFile = (info: IFileInfo) => {
        const playback = audioEngine.setupPlaybackLocalFile(info)

        playback.handler.on('load', () => {
            dispatch(changeCurrentSound(info))
        })

        playback.handler.on('end', () => {
            dispatch(changeCurrentSound(undefined))
        })

        playback.play()
    }

    return { playSoundFile }
}
