import 'reflect-metadata'
import { container, inject, injectable } from 'tsyringe'
import type { IAppInformationRepository } from '../repositories'
import { TauriAppInformationRepository } from '../repositories'

const INJECTION_TOKEN = Symbol('IAppInformationRepository')

@injectable()
class AppInformationService {
    constructor(
        @inject(INJECTION_TOKEN)
        private readonly repository: IAppInformationRepository,
    ) {}

    public async getAppVersion(): Promise<string> {
        return this.repository.getAppVersion()
    }
}

container.register(INJECTION_TOKEN, {
    useClass: TauriAppInformationRepository,
})

export const appInformationService = container.resolve(AppInformationService)
