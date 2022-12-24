import { MdOutlineFolder, MdStarOutline } from 'react-icons/md'
import { styled } from '@/styles'
import { useDirectory } from '../hooks/useDirectory'
import { DirectoryTauriCommand } from '../api'
import { RootDirectoryList, FileList } from '../components'
import { useFileStore } from '../stores'

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
    const { directories, addDirectory } = useDirectory(new DirectoryTauriCommand())
    const files = useFileStore((state) => state.list)

    return (
        <StyledFileBrowser className="">
            <section className="directory-list">
                <RootDirectoryList key="Favorite" title="Favorites" icon={<MdStarOutline />} />

                <RootDirectoryList
                    key="Local"
                    title="Local"
                    icon={<MdOutlineFolder />}
                    list={directories}
                    handleAddClick={addDirectory}
                />
            </section>

            <section className="file-list">
                <FileList list={files} />
            </section>
        </StyledFileBrowser>
    )
}
