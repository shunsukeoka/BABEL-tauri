import { MasterVolumeMemo } from '@/features/audio'
import { useAppInfo } from '@/features/misc'
import { styled } from '@/styles'

const StyledGlobalFooter = styled('footer', {})

const GlobalFooter = () => {
    const { appVersion } = useAppInfo()

    return (
        <StyledGlobalFooter>
            <div>
                <MasterVolumeMemo />
            </div>

            <small>App version - {appVersion.data}</small>
        </StyledGlobalFooter>
    )
}

export { GlobalFooter }
