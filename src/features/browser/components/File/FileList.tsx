import { IFileInfo } from '../../types'
import { FileItem } from './FileItem'

export interface IFileListActions {}

export interface FileListProps {
    list?: IFileInfo[]
    handleDoubleClickItem?: (event: React.MouseEvent<HTMLInputElement>) => void
}

export const FileList: React.FC<FileListProps> = ({ list, handleDoubleClickItem }: FileListProps) => (
    <>
        {list &&
            list.map((item) => (
                <FileItem
                    key={item.file_path}
                    path={item.file_path}
                    name={item.file_name}
                    fileType={item.mime}
                    audioLength=""
                    tags={[]}
                    handleDoubleClick={handleDoubleClickItem}
                />
            ))}
    </>
)

FileList.defaultProps = {
    list: [],
}
