import clsx from 'clsx'
import { MdOutlineApps, MdOutlineAutoGraph, MdPlayCircleOutline, MdOutlineSettings } from 'react-icons/md'
import { MasterVolumeMemo, PlaybackControl } from '@/features/audio'
import { memo } from 'react'

interface GlobalMenuItemProps {
    icon?: React.ReactNode
    name?: string
    active?: boolean
}

const GlobalMenuItem = ({ icon, name, active, ...props }: GlobalMenuItemProps) => (
    <div
        className={clsx(
            'flex cursor-pointer items-center justify-start text-lg hover:opacity-80',
            active && 'text-primary',
        )}
        {...props}
    >
        <span className="mr-2 h-4">{icon}</span>
        <h3 className="select-none font-roboto font-light leading-none">{name}</h3>
    </div>
)

GlobalMenuItem.defaultProps = {
    name: 'Name',
    active: false,
}

const GlobalMenuItemMemo = memo(GlobalMenuItem)

const GlobalMenu = () => (
    <div className="flex items-center justify-start [&>div]:mx-5">
        <GlobalMenuItemMemo active name="Browse" icon={<MdPlayCircleOutline />} />
        <GlobalMenuItemMemo name="Projects" icon={<MdOutlineApps />} />
        <GlobalMenuItemMemo name="Graph" icon={<MdOutlineAutoGraph />} />
    </div>
)

const GlobalHeader = () => (
    <header className="flex h-[64px] w-full items-center justify-center">
        <h2 className="absolute left-8 select-none font-melete-light text-lg leading-none">BABEL</h2>
        <GlobalMenu />
        <div className="absolute right-8 cursor-pointer text-xl hover:opacity-80">
            <MdOutlineSettings />
        </div>
    </header>
)

const GlobalFooter = () => (
    <footer className="relative flex h-[104px] w-full items-center justify-center">
        <PlaybackControl />
        <div className="absolute right-10">
            <MasterVolumeMemo variant="default" size="large" />
        </div>
    </footer>
)

type MainLayoutProps = {
    children: React.ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => (
    <div>
        <GlobalHeader />

        <main className="flex h-[calc(100vh-168px)] items-start justify-start">{children}</main>

        <GlobalFooter />
    </div>
)
