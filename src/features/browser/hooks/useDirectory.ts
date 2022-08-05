import { IFileInfo } from '@/types'
import { dialog } from '@tauri-apps/api'
import * as React from 'react'
import { IDirectoryRepository } from '../types'

export const useDirectory = (repository: IDirectoryRepository) => {
    const [directories, setDirectories] = React.useState<IFileInfo[]>([])

    const addDirectory = React.useCallback(async () => {
        const path = (await dialog.open({ directory: true })) as string

        const directoryInfo = await repository.add(path)

        if (directoryInfo.isOk()) setDirectories([...directories, directoryInfo.value])
    }, [directories, repository])

    return { directories, addDirectory }
}
