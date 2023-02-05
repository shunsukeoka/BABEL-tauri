import { Immutable } from "@/core/utils/decorators"

@Immutable
export abstract class ValueObject<T> {
    protected constructor(
        readonly value: T
    ) {
        if (!this.isValid()) {
        throw new Error()
        }
    }

    public equals(v: ValueObject<T>): boolean {
        return this.value === v.value
    }

    protected abstract isValid(): boolean
}
