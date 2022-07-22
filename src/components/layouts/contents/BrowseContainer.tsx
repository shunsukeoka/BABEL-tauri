import { MdOutlineFolder, MdStarOutline } from 'react-icons/md'
import styled from 'styled-components'
import { IFileInfo } from '../../../interfaces/file'
import { BrowseList } from './BrowseList'

/**
 * Props
 */
interface BrowseContainerProps {
    favorites?: IFileInfo[]
    directories?: IFileInfo[]
    handleAddDirectory?: (event: React.MouseEvent<HTMLInputElement>) => void
}

/**
 * Styled Component
 */
const StyledBrowseContainer = styled.section`
    min-width: 200px;

    & > div {
        padding: 24px 0;
    }
`

/**
 * View Component
 */
const BrowseContainerView: React.VFC<BrowseContainerProps> = ({
    favorites,
    directories,
    handleAddDirectory,
    ...props
}: BrowseContainerProps) => (
    <StyledBrowseContainer {...props}>
        <BrowseList title="Favorites" icon={<MdStarOutline />} browseList={favorites} />

        <BrowseList
            title="Local"
            icon={<MdOutlineFolder />}
            browseList={directories}
            handleAddClick={handleAddDirectory}
        />
    </StyledBrowseContainer>
)

/**
 * Default Props
 */
BrowseContainerView.defaultProps = {
    favorites: [],
    directories: [],
    handleAddDirectory: (event) => {
        event.preventDefault()
    },
}

/**
 * Component
 */
const BrowseContainer: React.VFC<BrowseContainerProps> = (props) => <BrowseContainerView {...props} />

/**
 * Export
 */
export { BrowseContainer }
