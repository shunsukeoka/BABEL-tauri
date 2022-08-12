import { IFileInfo } from '@/types'
import create from 'zustand'

type FileStoreType = {
    list: IFileInfo[]
    updateList: (list: IFileInfo[]) => void
}

export const useFileStore = create<FileStoreType>((set) => ({
    list: [],

    updateList: (list: IFileInfo[]) => {
        set(() => ({
            list,
        }))
    },
}))
