import { IFileInfo } from '@/types'
import { FileListItemMemo } from '../FileListItem'

export interface IFileListActions {}

export interface FileListProps {
    list?: IFileInfo[]
}

export const FileList = ({ list }: FileListProps) => (
    <>{list && list.map((item) => <FileListItemMemo key={item.file_path} info={item} />)}</>
)

FileList.defaultProps = {
    list: [],
}
