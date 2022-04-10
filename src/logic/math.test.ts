import { sum } from './math'

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})

describe('true is truthy and false is falsy', () => {
    test('true is truthy', () => {
        expect(true).toBe(true)
    })

    test('false is falsy', () => {
        expect(false).toBe(false)
    })
})
