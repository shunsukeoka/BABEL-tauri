import { styled } from '@/styles'
import { FileList, RootDirectoryList } from '../components'

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

export const FileBrowser = () => (
        <StyledFileBrowser>
            <section className="directory-list">
                <RootDirectoryList />
            </section>

            <section className="file-list">
                <FileList />
            </section>
        </StyledFileBrowser>
    )
