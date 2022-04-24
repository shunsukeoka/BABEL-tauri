import styled from 'styled-components'
import { IDirectoryInfo } from '../../interfaces/file'
import { IProjectInfo } from '../../interfaces/project'
import { ITag } from '../../interfaces/tag'
import { ReactComponent as CircleIcon } from '../../assets/img/icon/circle.svg'
import { ReactComponent as StarIcon } from '../../assets/img/icon/star.svg'
import { TooltipContainer } from '../common/tooltip/TooltipContainer'

interface ISidenavActions {
    id: string
    icon: React.ReactNode
    tooltip?: string
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
}

/**
 * Props
 */
interface SideNavProps {
    tags?: ITag[]
    projects?: IProjectInfo[]
    directories?: IDirectoryInfo[]
    actions?: ISidenavActions[]
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
}

/**
 * View Component
 */
const SideNavView: React.VFC<SideNavProps> = ({
    tags,
    projects,
    directories,
    actions,
    onClick,
    ...props
}: SideNavProps) => (
    <aside {...props}>
        <sp-sidenav defaultValue="Favorite">
            <sp-sidenav-heading label="COMMON">
                <sp-sidenav-item label="Favorite" value="Favorite" onClick={onClick}>
                    <sp-icon size="s" slot="icon">
                        <StarIcon />
                    </sp-icon>
                </sp-sidenav-item>
            </sp-sidenav-heading>

            <sp-sidenav-heading label="TAGS">
                {tags &&
                    tags.map((tag) => (
                        <sp-sidenav-item key={tag.id} label={tag.name} value={tag.id} onClick={onClick}>
                            <sp-icon size="s" slot="icon">
                                <CircleIcon />
                            </sp-icon>
                        </sp-sidenav-item>
                    ))}
            </sp-sidenav-heading>

            <sp-sidenav-heading label="PROJECTS">
                {projects &&
                    projects.map((proj) => (
                        <sp-sidenav-item key={proj.id} label={proj.name} value={proj.id} onClick={onClick} />
                    ))}
            </sp-sidenav-heading>

            <sp-sidenav-heading label="LOCAL DIRECTORIES">
                {directories &&
                    directories.map((dir) => (
                        <sp-sidenav-item key={dir.path} label={dir.name} value={dir.path} onClick={onClick} />
                    ))}
            </sp-sidenav-heading>
        </sp-sidenav>

        <sp-action-group class="mt-2" compact justified>
            {actions &&
                actions.map((action) => (
                    <TooltipContainer key={action.id} text={action.tooltip}>
                        <sp-action-button size="s" value={action.id} onClick={action.onClick}>
                            <sp-icon slot="icon">{action.icon}</sp-icon>
                        </sp-action-button>
                    </TooltipContainer>
                ))}
        </sp-action-group>
    </aside>
)

/**
 * Default Props
 */
SideNavView.defaultProps = {
    tags: [],
    projects: [],
    directories: [],
    actions: [],
    onClick: (event) => {
        event.preventDefault()
    },
}

/**
 * Styled Component
 */
const StyledSideNav = styled(SideNavView)`
    max-width: 240px;
`

/**
 * Component
 */
const SideNav: React.VFC<SideNavProps> = (props) => <StyledSideNav {...props} />

/**
 * Export
 */
export { SideNav }
