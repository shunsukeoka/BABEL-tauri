import styled from 'styled-components'
import { mixin } from '../../assets/styles/mixin'
import { FileItem, FileItemProps } from './FileItem'

export interface IFileListActions {}

/**
 * Props
 */
export interface FileListProps {
    items?: FileItemProps[]
}

/**
 * Styled Component
 */
const StyledFileList = styled.section`
    min-width: 320px;
    height: calc(100vh - 78px);
    margin-right: 16px;
    overflow-y: scroll;
    ${mixin.scrollbarHidden}
`

/**
 * View Component
 */
const FileListView: React.VFC<FileListProps> = ({ items, ...props }: FileListProps) => (
    <StyledFileList {...props}>
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
    </StyledFileList>
)

/**
 * Default Props
 */
FileListView.defaultProps = {
    items: [],
}

/**
 * Component
 */
const FileList: React.VFC<FileListProps> = (props) => <FileListView {...props} />

/**
 * Export
 */
export { FileList }
