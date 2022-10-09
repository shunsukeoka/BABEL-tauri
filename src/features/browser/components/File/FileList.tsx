import { IFileInfo } from '@/types'
import { FileItemMemo } from './FileItem'

export interface IFileListActions {}

export interface FileListProps {
    list?: IFileInfo[]
}

export const FileList = ({ list }: FileListProps) => (
    <>{list && list.map((item) => <FileItemMemo key={item.file_path} info={item} />)}</>
)

FileList.defaultProps = {
    list: [],
}
