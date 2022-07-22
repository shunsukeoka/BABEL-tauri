import { MdOutlineSettings } from 'react-icons/md'
import styled from 'styled-components'
import { GlobalMenu } from './menu/GlobalMenu'

/**
 * Props
 */
export interface GlobalHeaderProps {}

/**
 * Styled Component
 */
const StyledGlobalHeader = styled.header<GlobalHeaderProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 64px;

    & > h2 {
        position: absolute;
        left: 32px;
        font-size: 16px;
        line-height: 1em;
        cursor: pointer;

        &:hover {
            opacity: 0.8;
        }
    }

    & > .settings {
        position: absolute;
        right: 32px;
        font-size: 20px;
        cursor: pointer;

        &:hover {
            opacity: 0.8;
        }
    }
`

/**
 * View Component
 */
const GlobalHeaderView: React.VFC<GlobalHeaderProps> = ({ ...props }: GlobalHeaderProps) => (
    <StyledGlobalHeader {...props}>
        <h2 className="logo">BABEL</h2>
        <GlobalMenu />
        <div className="settings">
            <MdOutlineSettings />
        </div>
    </StyledGlobalHeader>
)

/**
 * Default Props
 */
GlobalHeaderView.defaultProps = {}

/**
 * Component
 */
const GlobalHeader: React.VFC<GlobalHeaderProps> = (props) => <GlobalHeaderView {...props} />

/**
 * Export
 */
export { GlobalHeader }
