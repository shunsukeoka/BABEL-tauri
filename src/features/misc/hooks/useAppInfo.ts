import { useQuery } from '@tanstack/react-query'
import { container } from '../di'
import { AppInformationService } from '../services'
import { DI_TOKEN } from '../types'

export const useAppInfo = () => {
    const appVersion = useQuery({
        queryKey: ['app-version'],
        queryFn: () => container.resolve<AppInformationService>(DI_TOKEN.IAppInformationRepository).getAppVersion(),
    })

    return {
        appVersion,
    }
}
