import 'reflect-metadata'
import { container } from 'tsyringe'
import { TauriAppInformationRepository } from './repositories'
import { DI_TOKEN } from './types'

container.register(DI_TOKEN.IAppInformationRepository, {
    useClass: TauriAppInformationRepository,
})

export { container }
