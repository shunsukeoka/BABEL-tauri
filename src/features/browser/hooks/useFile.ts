import { IFileInfo } from '@/types'
import * as React from 'react'
import { IFileBrowserRepository } from '../types'

export const useFile = (repository: IFileBrowserRepository) => {
    const [files, setFiles] = React.useState<IFileInfo[]>([])

    const fileElementRef = React.useRef<HTMLDivElement>(null)

    const getFiles = React.useCallback(
        async (selected: React.RefObject<HTMLDivElement>) => {
            const path = selected.current?.getAttribute('data-path') || ''
            const fileList = await repository.fetch(path)
            setFiles(fileList)
        },
        [repository],
    )

    return { files, fileElementRef, getFiles }
}
