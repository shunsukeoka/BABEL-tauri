import { MasterVolumeMemo } from '@/features/audio'
import { appInformationService } from '@/features/misc'
import { styled } from '@/styles'
import { useQuery } from '@tanstack/react-query'

const StyledGlobalFooter = styled('footer', {})

const GlobalFooter = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['app-version'],
        queryFn: () => appInformationService.getAppVersion(),
    })

    return (
        <StyledGlobalFooter>
            <div>
                <MasterVolumeMemo />
            </div>

            <small>App version - {isLoading ? '' : data}</small>
        </StyledGlobalFooter>
    )
}

export { GlobalFooter }
