import { styled } from '@/styles'
import clsx from 'clsx'
import { memo } from 'react'

interface GlobalMenuItemProps {
    icon?: React.ReactNode
    name?: string
    active?: boolean
}

const StyledGlobalMenuItem = styled('div', {
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1rem',
    opacity: 1,
    transition: '.4s opacity ease',
    backfaceVisibility: 'hidden',
    '&.active': {
        color: '$secondaryLight',
    },
    '&:hover': {
        opacity: 0.4,
    },
    '& > span': {
        display: 'flex',
        alignItems: 'center',
        marginRight: '$2',
    },
    '& > h3': {
        userSelect: 'none',
        fontFamily: '$main',
        fontWeight: 'lighter',
        lineHeight: 1,
    },
})

const GlobalMenuItem = ({ icon, name, active }: GlobalMenuItemProps) => (
    <StyledGlobalMenuItem className={clsx(StyledGlobalMenuItem.className, active && 'active')}>
        <span>{icon}</span>
        <h3>{name}</h3>
    </StyledGlobalMenuItem>
)

GlobalMenuItem.defaultProps = {
    name: 'Name',
    active: false,
}

export const GlobalMenuItemMemo = memo(GlobalMenuItem)
