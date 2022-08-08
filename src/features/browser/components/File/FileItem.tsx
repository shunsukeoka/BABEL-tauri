import { IFileInfo } from '@/types'
import { format } from 'date-fns'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { changeCurrentSound, changePlayingState } from '@/slice/audioPlaybackSlice'
import { audioEngine } from '@/features/audio'

export interface FileItemProps {
    info?: IFileInfo
}

export const FileItem = ({ info }: FileItemProps) => {
    const dispatch = useDispatch()

    const handleDoubleClick = useCallback(() => {
        if (!info || !info.audio_properties) return

        if (audioEngine.playbackInstance) {
            dispatch(changePlayingState(false))
            dispatch(changeCurrentSound(undefined))
            audioEngine.playbackInstance.destroy()
        }

        const playback = audioEngine.setupPlaybackLocalFile(info)

        playback.handler.on('play', () => {
            dispatch(changePlayingState(true))
            dispatch(changeCurrentSound(info))
        })

        playback.handler.on('pause', () => {
            dispatch(changePlayingState(false))
        })

        playback.handler.on('end', () => {
            dispatch(changePlayingState(false))
            dispatch(changeCurrentSound(undefined))
        })

        playback.play()
    }, [dispatch, info])

    return (
        <div
            className="flex cursor-pointer items-center justify-between overflow-hidden px-2 py-4 text-sm hover:opacity-60 not-first-child:border-t-[1px] not-first-child:border-solid not-first-child:border-t-[#efefef]"
            onDoubleClick={handleDoubleClick}
        >
            <p className="overflow-hidden text-ellipsis whitespace-nowrap">{info?.file_name}</p>
            <p className="text-sm">{info?.audio_properties ? format(info.audio_properties.duration, 'mm:ss') : ''}</p>
        </div>
    )
}
