import { IFileInfo } from '@/types'
import create from 'zustand'

type PlaybackStoreType = {
    currentSound: IFileInfo | undefined
    isPlaying: boolean
    isRepeat: boolean
    updateCurrentSound: (currentSound: IFileInfo | undefined) => void
    updatePlayingState: (isPlaying: boolean) => void
    toggleRepeatState: () => void
}

export const usePlaybackStore = create<PlaybackStoreType>((set) => ({
    currentSound: undefined,

    isPlaying: false,

    isRepeat: false,

    updateCurrentSound: (currentSound: IFileInfo | undefined) => {
        set(() => ({ currentSound }))
    },

    updatePlayingState: (isPlaying: boolean) => {
        set(() => ({ isPlaying }))
    },

    toggleRepeatState: () => {
        set((state) => ({ isRepeat: !state.isRepeat }))
    },
}))
