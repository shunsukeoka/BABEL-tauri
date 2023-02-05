/* ************************
    Class Decorators
************************ */

/**
 * クラスの変更を許可しない
 * @param constructor
 */
export const Immutable = (constructor: Function) => {
    Object.freeze(constructor)
    Object.freeze(constructor.prototype)
}
