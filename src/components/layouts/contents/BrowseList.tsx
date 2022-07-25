import { MdAdd } from 'react-icons/md'
import styled from 'styled-components'
import { IFileInfo } from '@/interfaces/file'
import { BrowseListItem } from './BrowseListItem'

/**
 * Props
 */
interface BrowseListProps {
    icon?: React.ReactNode
    title?: string
    browseList?: IFileInfo[]
    handleAddClick?: (event: React.MouseEvent<HTMLInputElement>) => void
}

/**
 * Styled Component
 */
const StyledBrowseList = styled.div`
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 24px;
        font-size: 16px;

        .title {
            display: flex;
            justify-content: flex-start;

            h3 {
                font-weight: 300;
                letter-spacing: 0.05em;
            }

            & > span {
                height: 16px;
                margin-right: 8px;
            }
        }

        & > p {
            cursor: pointer;
        }
    }

    .list {
        & > li:not(:first-child) {
            margin-top: 8px;
        }
    }
`

/**
 * View Component
 */
const BrowseListView: React.VFC<BrowseListProps> = ({
    icon,
    title,
    browseList,
    handleAddClick,
    ...props
}: BrowseListProps) => (
    <StyledBrowseList {...props}>
        <header>
            <section className="title">
                <span>{icon}</span>
                <h3 className="font-roboto">{title}</h3>
            </section>

            {handleAddClick && (
                <p onClick={handleAddClick} role="presentation">
                    <MdAdd />
                </p>
            )}
        </header>

        <ul className="list">
            {browseList && browseList.map((item) => <BrowseListItem key={item.file_path} name={item.file_name} />)}
        </ul>
    </StyledBrowseList>
)

/**
 * Default Props
 */
BrowseListView.defaultProps = {
    title: 'Title',
    browseList: [],
}

/**
 * Component
 */
const BrowseList: React.VFC<BrowseListProps> = (props) => <BrowseListView {...props} />

/**
 * Export
 */
export { BrowseList }
