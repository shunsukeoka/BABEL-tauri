import { MdOutlineFolder, MdStarOutline } from 'react-icons/md'
import { styled } from '@/styles'
import { useCallback } from 'react'
import { dialog } from '@tauri-apps/api'
import { RootDirectoryList, FileList } from '../components'
import { useFileStore } from '../stores'
import { useRootDirectory } from '../hooks/useRootDirectory'

const StyledFileBrowser = styled('div', {
    display: 'flex',
    height: '100%',
    width: 'auto',
    justifyContent: 'space-between',

    '& > section': {
        height: '100%',
        padding: '0 $6',
    },

    '& > .directory-list': {
        minWidth: '200px',
    },

    '& > .file-list': {
        marginRight: '$4',
        height: 'calc(100vh-78px)',
        minWidth: '320px',
        overflowY: 'scroll',
    },
})

export const FileBrowser = () => {
    const { rootDirectory, rootDirectoryFindMutation, addRootDirectoryMutation } = useRootDirectory()
    const files = useFileStore((state) => state.list)

    const onClickAddRootDirectoryButton = useCallback(async () => {
        const path = (await dialog.open({ directory: true })) as string
        const directory = await addRootDirectoryMutation.mutateAsync(path)
        console.log(directory)

        const found = await rootDirectoryFindMutation.mutateAsync(directory.id)
        console.log(found)
    }, [addRootDirectoryMutation, rootDirectoryFindMutation])

    return (
        <StyledFileBrowser className="">
            <section className="directory-list">
                <RootDirectoryList key="Favorite" title="Favorites" icon={<MdStarOutline />} />

                {rootDirectory.isSuccess && (
                    <RootDirectoryList
                        key="Local"
                        title="Local"
                        icon={<MdOutlineFolder />}
                        list={rootDirectory.data}
                        handleAddClick={onClickAddRootDirectoryButton}
                    />
                )}
            </section>

            <section className="file-list">
                <FileList list={files} />
            </section>
        </StyledFileBrowser>
    )
}
