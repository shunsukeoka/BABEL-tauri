import { inject, injectable } from 'tsyringe'
import type { IAppInformationRepository } from '../repositories'
import { DI_TOKEN } from '../types'

@injectable()
class AppInformationService {
    constructor(
        @inject(DI_TOKEN.IAppInformationRepository)
        private readonly repository: IAppInformationRepository,
    ) {}

    public async getAppVersion(): Promise<string> {
        return this.repository.getAppVersion()
    }
}

export { AppInformationService }
