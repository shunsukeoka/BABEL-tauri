import clsx from 'clsx'

export interface GlobalMenuItemProps {
    icon?: React.ReactNode
    name?: string
    active?: boolean
}

export const GlobalMenuItem: React.FC<GlobalMenuItemProps> = ({
    icon,
    name,
    active,
    ...props
}: GlobalMenuItemProps) => (
    <div
        className={clsx(
            'flex cursor-pointer items-center justify-start text-lg hover:opacity-80',
            active && 'text-primary',
        )}
        {...props}
    >
        <span className="mr-2 h-4">{icon}</span>
        <h3 className="font-roboto font-light leading-none">{name}</h3>
    </div>
)

GlobalMenuItem.defaultProps = {
    name: 'Name',
    active: false,
}
