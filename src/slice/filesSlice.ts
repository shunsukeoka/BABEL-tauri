import { IFileInfo } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const filesSlice = createSlice({
    name: 'audio',
    initialState: {
        list: [] as IFileInfo[],
    },
    reducers: {
        updateFiles: (state, action: PayloadAction<IFileInfo[]>) => {
            state.list = action.payload
        },
    },
})

export const { updateFiles } = filesSlice.actions
export default filesSlice.reducer
