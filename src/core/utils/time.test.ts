import { timeToDisplayMS, timeToDisplayHMS } from './time'

test('convert to MM:SS', () => {
    expect(timeToDisplayMS(180)).toBe('03:00')
})

test('convert to HH:MM:SS', () => {
    expect(timeToDisplayHMS(3600)).toBe('01:00:00')
})
