import { changeCurrentPlaybackId, changeCurrentSound, changePlayingState } from '@/slice/audioPlaybackSlice'
import { IFileInfo } from '@/types'
import { useDispatch } from 'react-redux'
import { audioEngine } from '../utils'

export const usePlayback = () => {
    const dispatch = useDispatch()

    const playSoundFile = (info: IFileInfo) => {
        const playback = audioEngine.setupPlaybackLocalFile(info)

        playback.handler.on('play', () => {
            dispatch(changePlayingState(true))
            dispatch(changeCurrentPlaybackId(playback.instanceId))
            dispatch(changeCurrentSound(info))
        })

        playback.handler.on('pause', () => {
            dispatch(changePlayingState(false))
        })

        playback.handler.on('end', () => {
            dispatch(changePlayingState(false))
            dispatch(changeCurrentPlaybackId(undefined))
            dispatch(changeCurrentSound(undefined))
            playback.destroy()
        })

        playback.play()
    }

    const pause = (playbackId: string) => {
        const playback = audioEngine.getInstance(playbackId)
        if (playback) {
            playback.pause()
        } else {
            console.warn('再生中のプレイバックインスタンスは存在しません。')
        }
    }

    const resume = (playbackId: string) => {
        const playback = audioEngine.getInstance(playbackId)
        if (playback) {
            playback.play()
            dispatch(changePlayingState(true))
        } else {
            console.warn('一時停止されたプレイバックインスタンスは存在しません。')
        }
    }

    return { playSoundFile, pause, resume }
}
