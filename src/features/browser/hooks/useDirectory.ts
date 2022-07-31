import { dialog } from '@tauri-apps/api'
import * as React from 'react'
import { IFileInfo, IDirectoryRepository } from '../types'

export const useDirectory = (repository: IDirectoryRepository) => {
    const [directories, setDirectories] = React.useState<IFileInfo[]>([])

    const addDirectory = React.useCallback(async () => {
        const path = (await dialog.open({ directory: true })) as string

        const directoryInfo = await repository.add(path)

        setDirectories([...directories, directoryInfo])
    }, [directories, repository])

    return { directories, addDirectory }
}
