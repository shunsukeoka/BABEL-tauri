import { styled } from '@/styles'
import { MdOutlineApps, MdOutlineAutoGraph, MdPlayCircleOutline } from 'react-icons/md'
import { GlobalMenuItemMemo } from '../GlobalMenuItem'

const StyledGlobalMenu = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '& > div': {
        '&:not(:first-child)': {
            marginLeft: '$4',
        },
    },
})

const GlobalMenu = () => (
    <StyledGlobalMenu className="flex items-center justify-start [&>div]:mx-5">
        <GlobalMenuItemMemo active name="Browse" icon={<MdPlayCircleOutline />} />
        <GlobalMenuItemMemo name="Projects" icon={<MdOutlineApps />} />
        <GlobalMenuItemMemo name="Graph" icon={<MdOutlineAutoGraph />} />
    </StyledGlobalMenu>
)

export { GlobalMenu }
