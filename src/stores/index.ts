import { configureStore } from '@reduxjs/toolkit'
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux'
import audioPlaybackReducer from '@/slice/audioPlaybackSlice'
import filesSliceReducer from '@/slice/filesSlice'

export const store = configureStore({
    reducer: {
        audio: audioPlaybackReducer,
        files: filesSliceReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector
