import { inject, injectable } from 'tsyringe'
import { RootDirectoryEntity } from '../entities/root-directory-entity'
import type { IRootDirectoryRepository } from '../repositories'
import { DI_TOKEN } from '../types'

@injectable()
class RootDirectoryService {
    constructor(
        @inject(DI_TOKEN.IRootDirectoryRepository)
        private readonly repository: IRootDirectoryRepository,
    ) {}

    public async findAll(): Promise<RootDirectoryEntity[]> {
        const directoryList = await this.repository.findAll()
        return directoryList.map((directory) => new RootDirectoryEntity({ ...directory }))
    }

    public async find(id: number): Promise<RootDirectoryEntity> {
        const directory = await this.repository.find(id)

        if (directory === null) throw new Error('ディレクトリが見つかりませんでした。')

        return new RootDirectoryEntity({ ...directory })
    }

    public async create(path: string): Promise<RootDirectoryEntity> {
        const directory = await this.repository.create(path)
        return new RootDirectoryEntity({ ...directory })
    }
}

export { RootDirectoryService }
