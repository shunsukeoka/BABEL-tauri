import styled from 'styled-components'

/**
 * Props
 */
export interface GlobalMenuItemProps {
    icon?: React.ReactNode
    name?: string
    active?: boolean
}

/**
 * Styled Component
 */
const StyledGlobalMenuItem = styled.div<GlobalMenuItemProps>`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &.active {
        color: #cd2732;
    }

    & > span {
        height: 16px;
        margin-right: 8px;
    }

    & > h3 {
        font-weight: 300;
        line-height: 1em;
    }
`

/**
 * View Component
 */
const GlobalMenuItemView: React.VFC<GlobalMenuItemProps> = ({ icon, name, active, ...props }: GlobalMenuItemProps) => (
    <StyledGlobalMenuItem className={active ? 'active' : ''} {...props}>
        <span className="icon">{icon}</span>
        <h3 className="font-roboto">{name}</h3>
    </StyledGlobalMenuItem>
)

/**
 * Default Props
 */
GlobalMenuItemView.defaultProps = {
    name: 'Name',
    active: false,
}

/**
 * Component
 */
const GlobalMenuItem: React.VFC<GlobalMenuItemProps> = (props) => <GlobalMenuItemView {...props} />

/**
 * Export
 */
export { GlobalMenuItem }
