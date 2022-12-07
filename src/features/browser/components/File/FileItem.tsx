import { IFileInfo } from '@/types'
import { memo, useCallback } from 'react'
import { timeToDisplayMS } from '@/utils/time'
// import { FileTauriCommand } from '../../api'
// import { useFile } from '../../hooks/useFile'

export interface FileItemProps {
    info: IFileInfo
}

export const FileItem = ({ info }: FileItemProps) => {
    // const { getFiles } = useFile(new FileTauriCommand())

    const handleDoubleClick = useCallback(() => {
        // if (info.audio_properties) {
        // } else if (info.is_dir) {
        //     getFiles(info.file_path)
        // }
    }, [])

    return (
        <div
            className="flex cursor-pointer select-none items-center justify-between overflow-hidden px-2 py-4 text-sm hover:opacity-60 not-first-child:border-t-[1px] not-first-child:border-solid not-first-child:border-t-[#efefef]"
            onDoubleClick={handleDoubleClick}
        >
            <p className="overflow-hidden text-ellipsis whitespace-nowrap">{info?.file_name}</p>
            <p className="text-sm">{info?.audio_properties ? timeToDisplayMS(info.audio_properties.duration) : ''}</p>
        </div>
    )
}

export const FileItemMemo = memo(FileItem)
