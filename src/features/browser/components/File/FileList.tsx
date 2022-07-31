import { IFileInfo } from '@/types'
import { useCallback } from 'react'
import { FileItem } from './FileItem'

export interface IFileListActions {}

export interface FileListProps {
    list?: IFileInfo[]
    handleDoubleClickItem: (info: IFileInfo | undefined) => void
}

export const FileList = ({ list, handleDoubleClickItem }: FileListProps) => {
    const onDoubleClick = useCallback(
        (info: IFileInfo | undefined) => {
            handleDoubleClickItem(info)
        },
        [handleDoubleClickItem],
    )

    return (
        <>
            {list &&
                list.map((item) => (
                    <FileItem key={item.file_path} info={item} handleDoubleClick={() => onDoubleClick(item)} />
                ))}
        </>
    )
}

FileList.defaultProps = {
    list: [],
}
