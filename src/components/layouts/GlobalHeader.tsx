import { MdOutlineSettings } from 'react-icons/md'
import { GlobalMenu } from './menu/GlobalMenu'

export interface GlobalHeaderProps {}

export const GlobalHeader: React.FC<GlobalHeaderProps> = ({ ...props }: GlobalHeaderProps) => (
    <header className="flex h-[64px] w-full items-center justify-center" {...props}>
        <h2 className="absolute left-8 font-melete-light text-lg leading-none">BABEL</h2>
        <GlobalMenu />
        <div className="absolute right-8 cursor-pointer text-xl hover:opacity-80">
            <MdOutlineSettings />
        </div>
    </header>
)

GlobalHeader.defaultProps = {}
