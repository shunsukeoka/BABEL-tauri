import { MdDragIndicator, MdMoreVert } from 'react-icons/md'
import styled from 'styled-components'

/**
 * Props
 */
interface BrowseListItemProps {
    name?: string
}

/**
 * Styled Component
 */
const StyledBrowseListItem = styled.li`
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding-right: 16px;
    cursor: pointer;

    .name {
        margin-left: 8px;
        overflow: hidden;
        font-size: 13px;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    & > span {
        height: 16px;

        svg {
            font-size: 16px;
        }

        &.drag {
            cursor: grab;
            visibility: hidden;
        }

        &.menu {
            position: absolute;
            right: 0;
            visibility: hidden;
        }
    }

    &:hover {
        .drag {
            visibility: visible;
        }

        .menu {
            visibility: visible;
        }
    }
`

/**
 * View Component
 */
const BrowseListItemView: React.VFC<BrowseListItemProps> = ({ name, ...props }: BrowseListItemProps) => (
    <StyledBrowseListItem {...props}>
        <span className="drag">
            <MdDragIndicator />
        </span>

        <p className="name">{name}</p>

        <span className="menu">
            <MdMoreVert />
        </span>
    </StyledBrowseListItem>
)

/**
 * Default Props
 */
BrowseListItemView.defaultProps = {
    name: 'Name',
}

/**
 * Component
 */
const BrowseListItem: React.VFC<BrowseListItemProps> = (props) => <BrowseListItemView {...props} />

/**
 * Export
 */
export { BrowseListItem }
