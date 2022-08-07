import { IFileInfo } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const audioPlaybackSlice = createSlice({
    name: 'audio',
    initialState: {
        currentPlaybackId: undefined as string | undefined,
        currentSound: undefined as IFileInfo | undefined,
        isPlaying: false,
        isRepeat: false,
    },
    reducers: {
        changeCurrentPlaybackId: (state, action: PayloadAction<string | undefined>) => {
            state.currentPlaybackId = action.payload
        },

        changeCurrentSound: (state, action: PayloadAction<IFileInfo | undefined>) => {
            state.currentSound = action.payload
        },

        changePlayingState: (state, action: PayloadAction<boolean>) => {
            state.isPlaying = action.payload
        },

        toggleRepeat: (state) => {
            state.isRepeat = !state.isRepeat
        },
    },
})

export const { changeCurrentPlaybackId, changeCurrentSound, changePlayingState, toggleRepeat } =
    audioPlaybackSlice.actions
export default audioPlaybackSlice.reducer
