import styled from 'styled-components'
import { invoke } from '@tauri-apps/api/tauri'
import { Tags } from '../common/tag/Tags'
import { TagProps } from '../common/tag/Tag'

/**
 * Props
 */
export interface FileItemProps {
    path: string
    name?: string
    fileType?: string
    audioLength?: string
    tags?: TagProps[]
    handleDoubleClick?: (event: React.MouseEvent<HTMLInputElement>) => void
}

/**
 * Styled Component
 */
const StyledFileItem = styled.div`
    padding: 1rem;
    overflow: hidden;
    cursor: pointer;

    &:not(:first-child) {
        border-top: 1px solid #efefef;
    }

    &:hover {
        opacity: 0.6;
    }

    .name {
        margin: 0;
        overflow: hidden;
        font-size: 12px;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .detail {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 10px;
    }
`

/**
 * View Component
 */
const FileItemView: React.VFC<FileItemProps> = ({
    path,
    name,
    fileType,
    audioLength,
    tags,
    handleDoubleClick,
    ...props
}: FileItemProps) => (
    <StyledFileItem {...props} onDoubleClick={handleDoubleClick} data-path={path}>
        <h3 className="name">{name}</h3>
        <div className="detail">
            <p className="type">{fileType}</p>
            <p className="length">{audioLength}</p>
        </div>
        <Tags tags={tags} />
    </StyledFileItem>
)

/**
 * Default Props
 */
FileItemView.defaultProps = {
    name: '',
    fileType: '',
    audioLength: '00:00',
    tags: [],
    handleDoubleClick: async (event) => {
        event.preventDefault()
        const path = event.currentTarget.getAttribute('data-path')
        await invoke('audio_play', { path })
    },
}

/**
 * Component
 */
const FileItem: React.VFC<FileItemProps> = (props) => <FileItemView {...props} />

/**
 * Export
 */
export { FileItem }
