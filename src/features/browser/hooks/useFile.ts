import * as React from 'react'
import { IFileBrowserRepository } from '../types'
import { useFileStore } from '../stores'

export const useFile = (repository: IFileBrowserRepository) => {
    const updateList = useFileStore((state) => state.updateList)

    const getFiles = React.useCallback(
        async (path: string) => {
            const fileList = await repository.fetch(path)

            if (fileList.isOk()) updateList(fileList.value)
        },
        [repository, updateList],
    )

    return { getFiles }
}
