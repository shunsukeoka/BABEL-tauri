import 'reflect-metadata'
import { container } from 'tsyringe'
import { TauriRootDirectoryRepository } from './repositories'
import { RootDirectoryService } from './services'
import { DI_TOKEN } from './types'

container.register(DI_TOKEN.IRootDirectoryRepository, {
    useClass: TauriRootDirectoryRepository,
})

container.register<RootDirectoryService>(DI_TOKEN.RootDirectoryService, {
    useClass: RootDirectoryService,
})

export { container }
