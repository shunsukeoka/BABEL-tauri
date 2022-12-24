import { styled } from '@/styles'
import { MdOutlineSettings } from 'react-icons/md'
import { GlobalMenu } from '../GlobalMenu'

const StyledGlobalHeader = styled('header', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    '& > div': {
        height: '1rem',
        cursor: 'pointer',
        opacity: 1,
        backfaceVisibility: 'hidden',
        transition: '.4s opacity ease',
        '&:hover': {
            opacity: 0.8,
        },
    },
})

const GlobalHeader = () => (
    <StyledGlobalHeader>
        <GlobalMenu />
        <div>
            <MdOutlineSettings />
        </div>
    </StyledGlobalHeader>
)

export { GlobalHeader }
