export const timeToDisplayMS = (sec: number): string => new Date(sec * 1000).toISOString().substring(14, 19)
export const timeToDisplayHMS = (sec: number): string => new Date(sec * 1000).toISOString().substring(11, 19)
// eslint-disable-next-line no-promise-executor-return
export const delayExecute = async (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms))
