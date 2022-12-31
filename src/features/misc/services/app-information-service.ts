import { IAppInformationRepository, TauriAppInformationRepository } from '../repositories'

class AppInformationService {
    constructor(private repository: IAppInformationRepository) {}

    public async getAppVersion(): Promise<string> {
        return this.repository.getAppVersion()
    }
}

const appInformationService = new AppInformationService(new TauriAppInformationRepository())

export { appInformationService }
