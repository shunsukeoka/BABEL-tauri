import { IFileInfo } from '../../types'
import { FileItem } from './FileItem'

export interface IFileListActions {}

export interface FileListProps {
    list?: IFileInfo[]
    handleDoubleClickItem?: (event: React.MouseEvent<HTMLInputElement>) => void
}

export const FileList: React.FC<FileListProps> = ({ list, handleDoubleClickItem, ...props }: FileListProps) => (
    <section className="mr-4 h-[calc(100vh-78px)] min-w-[320px] overflow-y-scroll scrollbar-hidden" {...props}>
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
    </section>
)

FileList.defaultProps = {
    list: [],
}
