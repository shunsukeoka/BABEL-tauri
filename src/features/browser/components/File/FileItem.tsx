import { usePlayback } from '@/features/audio'
import { IFileInfo } from '@/types'
import { format } from 'date-fns'
import { useCallback } from 'react'

export interface FileItemProps {
    info?: IFileInfo
}

export const FileItem = ({ info }: FileItemProps) => {
    const { playSoundFile } = usePlayback()

    const handleDoubleClick = useCallback(() => {
        if (info) playSoundFile(info)
    }, [info, playSoundFile])

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
