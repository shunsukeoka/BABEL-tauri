import React from 'react'
import { IFileInfo } from '../../types'
import { FileItem } from './FileItem'

export interface IFileListActions {}

export interface FileListProps {
    list?: IFileInfo[]
    handleDoubleClickItem?: (event: React.MouseEvent<HTMLInputElement>) => void
}

export const FileList = React.forwardRef<HTMLDivElement, FileListProps>(
    ({ list, handleDoubleClickItem }: FileListProps, ref) => (
        <>
            {list &&
                list.map((item) => (
                    <FileItem
                        ref={ref}
                        key={item.file_path}
                        path={item.file_path}
                        name={item.file_name}
                        audioLength="00:00"
                        handleDoubleClick={handleDoubleClickItem}
                    />
                ))}
        </>
    ),
)

FileList.defaultProps = {
    list: [],
}
