export const PLAYBACK_TYPE = {
    LOCAL_FILE: 'local',
    REMOTE_STORAGE: 'remote',
    YOUTUBE: 'youtube',
    UNKNOWN: 'unknown',
} as const

export type PlaybackType = typeof PLAYBACK_TYPE[keyof typeof PLAYBACK_TYPE]
