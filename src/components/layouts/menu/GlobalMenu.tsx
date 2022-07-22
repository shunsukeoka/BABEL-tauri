import { MdOutlineApps, MdOutlineAutoGraph, MdPlayCircleOutline } from 'react-icons/md'
import styled from 'styled-components'
import { GlobalMenuItem } from './GlobalMenuItem'

/**
 * Props
 */
export interface GlobalMenuProps {}

/**
 * Styled Component
 */
const StyledGlobalMenu = styled.div<GlobalMenuProps>`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    & > div:not(:first-child) {
        margin-left: 40px;
    }
`

/**
 * View Component
 */
const GlobalMenuView: React.VFC<GlobalMenuProps> = ({ ...props }: GlobalMenuProps) => (
    <StyledGlobalMenu {...props}>
        <GlobalMenuItem active name="Browse" icon={<MdPlayCircleOutline />} />
        <GlobalMenuItem name="Projects" icon={<MdOutlineApps />} />
        <GlobalMenuItem name="Graph" icon={<MdOutlineAutoGraph />} />
    </StyledGlobalMenu>
)

/**
 * Default Props
 */
GlobalMenuView.defaultProps = {
    name: 'Name',
    active: false,
}

/**
 * Component
 */
const GlobalMenu: React.VFC<GlobalMenuProps> = (props) => <GlobalMenuView {...props} />

/**
 * Export
 */
export { GlobalMenu }
