import { styled } from '@/styles'
import React from 'react'
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
    const files = useFileStore((state) => state.list)

    return (
        <StyledFileBrowser>
            <section className="directory-list">
                <React.Suspense fallback={<div>is loading...</div>}>
                    <RootDirectoryList />
                </React.Suspense>
            </section>

            <section className="file-list">
                <FileList list={files} />
            </section>
        </StyledFileBrowser>
    )
}
