import { tauriClient } from '@/utils/client'

export interface IAppInformationRepository {
    getAppVersion: () => Promise<string>
}

class TauriAppInformationRepository implements IAppInformationRepository {
    public getAppVersion(): Promise<string> {
        return tauriClient.query(['app.getAppVersion'])
    }
}

export { TauriAppInformationRepository }
