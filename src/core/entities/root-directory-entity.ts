import { FilePath } from '@/core/values'
import type { RootDirectory } from '@/types'
import { Immutable } from '@/core/utils/decorators'

@Immutable
class RootDirectoryEntity {
    private constructor({ ...params }: RootDirectory) {
        this.id = params.id
        this.path = FilePath.create(params.path)
        this.createdAt = params.createdAt
        this.updatedAt = params.updatedAt
    }

    public static create({ ...params }: RootDirectory) {
        try {
            return new RootDirectoryEntity(params)
        } catch (error) {
            throw new Error();
        }
    }

    public equals(other: RootDirectoryEntity): boolean {
        if (this === other) return true;
        return this.id === other.id;
    }

    readonly id: number

    path: FilePath

    createdAt: string

    updatedAt: string
}


export { RootDirectoryEntity }
