import { format } from 'date-fns'

export const millisToDisplayMS = (ms: number): string => format(ms, 'mm:ss')
export const millisToDisplayHMS = (ms: number): string => format(ms, 'hh:mm:ss')
