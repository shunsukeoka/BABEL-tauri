import { IFileInfo } from '@/types'
import { FileItem } from './FileItem'

export interface IFileListActions {}

export interface FileListProps {
    list?: IFileInfo[]
}

export const FileList = ({ list }: FileListProps) => (
    <>{list && list.map((item) => <FileItem key={item.file_path} info={item} />)}</>
)

FileList.defaultProps = {
    list: [],
}
