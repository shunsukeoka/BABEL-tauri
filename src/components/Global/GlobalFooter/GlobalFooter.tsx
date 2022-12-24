import { MasterVolumeMemo } from '@/features/audio'
import { styled } from '@/styles'

const StyledGlobalFooter = styled('footer', {})

const GlobalFooter = () => (
    <StyledGlobalFooter>
        <div>
            <MasterVolumeMemo />
        </div>
    </StyledGlobalFooter>
)

export { GlobalFooter }
