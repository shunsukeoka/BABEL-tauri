import { FileItem, FileItemProps } from './FileItem'

export interface IFileListActions {}

export interface FileListProps {
    items?: FileItemProps[]
}

export const FileList: React.FC<FileListProps> = ({ items, ...props }: FileListProps) => (
    <section className="mr-4 h-[calc(100vh-78px)] min-w-[320px] overflow-y-scroll scrollbar-hidden" {...props}>
        {items &&
            items.map((item) => (
                <FileItem
                    key={item.path}
                    path={item.path}
                    name={item.name}
                    fileType={item.fileType}
                    audioLength={item.audioLength}
                    tags={item.tags}
                />
            ))}
    </section>
)

FileList.defaultProps = {
    items: [],
}
