const AUDIO_PLAYBACK_STATE = {
    PLAYING: 'playing',
    PAUSED: 'paused',
} as const

export type AudioPlaybackState = typeof AUDIO_PLAYBACK_STATE[keyof typeof AUDIO_PLAYBACK_STATE]
