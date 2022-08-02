import { IFileInfo } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const audioPlaybackSlice = createSlice({
    name: 'audio',
    initialState: {
        currentSound: undefined as IFileInfo | undefined,
    },
    reducers: {
        changeCurrentSound: (state, action: PayloadAction<IFileInfo | undefined>) => {
            state.currentSound = action.payload
        },
    },
})

export const { changeCurrentSound } = audioPlaybackSlice.actions
export default audioPlaybackSlice.reducer
