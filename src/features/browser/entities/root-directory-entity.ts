import { RootDirectory } from '@/types'

class RootDirectoryEntity implements RootDirectory {
    constructor({ ...params }: RootDirectory) {
        this.id = params.id
        this.path = params.path
        this.createdAt = params.createdAt
        this.updatedAt = params.updatedAt
    }

    public get name(): string {
        return this.path.split('/').pop()?.split('\\').pop() || ''
    }

    readonly id: number

    path: string

    createdAt: string

    updatedAt: string
}

export { RootDirectoryEntity }
