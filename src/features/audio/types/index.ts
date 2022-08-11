export const PLAYBACK_TYPE = {
    LOCAL_FILE: 'local',
    REMOTE_STORAGE: 'remote',
    YOUTUBE: 'youtube',
    UNKNOWN: 'unknown',
} as const

export type PlaybackType = typeof PLAYBACK_TYPE[keyof typeof PLAYBACK_TYPE]

export const PLAYBACK_STATE = {
    PLAYING: 'playing',
    PAUSING: 'pausing',
    PAUSED: 'paused',
    STOPPING: 'stopping',
    STOPPED: 'stopped',
} as const

export type PlaybackStateType = typeof PLAYBACK_STATE[keyof typeof PLAYBACK_STATE]

export type PlaybackState = {
    state: PlaybackStateType
    elapsed_time: number
}
