import { IFileInfo } from '@/types'
import { useCallback } from 'react'

export interface FileItemProps {
    info?: IFileInfo
    handleDoubleClick: (info: IFileInfo | undefined) => void
}

export const FileItem = ({ info, handleDoubleClick }: FileItemProps) => {
    const onDoubleClick = useCallback(() => {
        handleDoubleClick(info)
    }, [handleDoubleClick, info])

    return (
        <div
            className="flex cursor-pointer items-center justify-between overflow-hidden px-2 py-4 text-sm hover:opacity-60 not-first-child:border-t-[1px] not-first-child:border-solid not-first-child:border-t-[#efefef]"
            onDoubleClick={onDoubleClick}
        >
            <p className="overflow-hidden text-ellipsis whitespace-nowrap">{info?.file_name}</p>
            <p className="text-sm">00:00</p>
        </div>
    )
}
