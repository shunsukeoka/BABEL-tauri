import 'reflect-metadata'
import { container } from 'tsyringe'
import { TauriRootDirectoryRepository } from '@/core/repositories'
import { RootDirectoryService } from '@/core/services'
import { DI_TOKEN } from '@/core/types'

container.register(DI_TOKEN.IRootDirectoryRepository, {
    useClass: TauriRootDirectoryRepository,
})

container.register<RootDirectoryService>(DI_TOKEN.RootDirectoryService, {
    useClass: RootDirectoryService,
})

export { container }
