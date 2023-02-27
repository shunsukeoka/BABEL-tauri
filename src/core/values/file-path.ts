import { ValueObject } from './base'

export class FilePath extends ValueObject<string> {
    constructor(readonly value: string) {
        super(value)
    }

    protected isValid(): boolean {
        return true
    }

    public static create(value: string): FilePath {
        try {
            return new FilePath(value)
        } catch (error) {
            throw new Error()
        }
    }

    public get name(): string {
        return this.value.split('/').pop()?.split('\\').pop() || ''
    }
}
