import { IFileInfo } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const audioPlaybackSlice = createSlice({
    name: 'audio',
    initialState: {
        currentSound: undefined as IFileInfo | undefined,
        isPlaying: false,
        isRepeat: false,
    },
    reducers: {
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

export const { changeCurrentSound, changePlayingState, toggleRepeat } = audioPlaybackSlice.actions
export default audioPlaybackSlice.reducer
