import * as React from 'react'
import { useDispatch } from 'react-redux'
import { updateFiles } from '@/slice/filesSlice'
import { IFileBrowserRepository } from '../types'

export const useFile = (repository: IFileBrowserRepository) => {
    const dispatch = useDispatch()

    const getFiles = React.useCallback(
        async (path: string) => {
            const fileList = await repository.fetch(path)

            if (fileList.isOk()) dispatch(updateFiles(fileList.value))
        },
        [dispatch, repository],
    )

    return { getFiles }
}
