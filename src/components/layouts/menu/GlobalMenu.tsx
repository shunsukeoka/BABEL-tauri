import { MdOutlineApps, MdOutlineAutoGraph, MdPlayCircleOutline } from 'react-icons/md'
import { GlobalMenuItem } from './GlobalMenuItem'

export interface GlobalMenuProps {}

export const GlobalMenu: React.FC<GlobalMenuProps> = ({ ...props }: GlobalMenuProps) => (
    <div className="flex items-center justify-start [&>div]:mx-5" {...props}>
        <GlobalMenuItem active name="Browse" icon={<MdPlayCircleOutline />} />
        <GlobalMenuItem name="Projects" icon={<MdOutlineApps />} />
        <GlobalMenuItem name="Graph" icon={<MdOutlineAutoGraph />} />
    </div>
)

GlobalMenu.defaultProps = {
    name: 'Name',
    active: false,
}
