import styled from 'styled-components'
import { IDirectoryInfo } from '../../interfaces/file'
import { IProjectInfo } from '../../interfaces/project'
import { ITag } from '../../interfaces/tag'
import { ReactComponent as CircleIcon } from '../../assets/img/icon/circle.svg'
import { ReactComponent as StarIcon } from '../../assets/img/icon/star.svg'

/**
 * Props
 */
interface SideNavProps {
    tags?: ITag[]
    projects?: IProjectInfo[]
    directories?: IDirectoryInfo[]
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
}

/**
 * View Component
 */
const SideNavView: React.VFC<SideNavProps> = ({ tags, projects, directories, onClick }: SideNavProps) => (
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
)

/**
 * Default Props
 */
SideNavView.defaultProps = {
    tags: [],
    projects: [],
    directories: [],
    onClick: (event) => {
        event.preventDefault()
    },
}

/**
 * Styled Component
 */
const StyledSideNav = styled(SideNavView)``

/**
 * Component
 */
const SideNav: React.VFC<SideNavProps> = (props) => <StyledSideNav {...props} />

/**
 * Export
 */
export { SideNav }
