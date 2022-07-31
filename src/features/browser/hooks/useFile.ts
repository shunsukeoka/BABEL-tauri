import * as React from 'react'
import { IFileInfo, IFileBrowserRepository } from '../types'

export const useFile = (repository: IFileBrowserRepository) => {
    const [files, setFiles] = React.useState<IFileInfo[]>([])

    const getFiles = React.useCallback(
        async (path: string) => {
            const fileList = await repository.fetch(path)
            setFiles(fileList)
        },
        [repository],
    )

    return { files, getFiles }
}
