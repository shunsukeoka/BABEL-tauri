import { dialog } from '@tauri-apps/api'
import * as React from 'react'
import { IFileInfo, IDirectoryRepository } from '../types'

export const useDirectory = (repository: IDirectoryRepository) => {
    const [directories, setDirectories] = React.useState<IFileInfo[]>([])

    const directoryElementRef = React.useRef(null)

    const addDirectory = React.useCallback(async () => {
        const path = (await dialog.open({ directory: true })) as string

        const directoryInfo = await repository.add(path)

        setDirectories([...directories, directoryInfo])
    }, [directories, repository])

    const selectDirectory = React.useCallback(async () => {
        console.log(directoryElementRef.current)
    }, [])

    return { directories, directoryElementRef, addDirectory, selectDirectory }
}
