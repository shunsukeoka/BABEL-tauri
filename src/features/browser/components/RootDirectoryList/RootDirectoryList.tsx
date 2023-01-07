import { useCallback } from 'react'
import { MdAdd, MdOutlineFolder } from 'react-icons/md'
import { styled } from '@/styles'
import { dialog } from '@tauri-apps/api'
import { useRootDirectory } from '../../hooks/useRootDirectory'
import { RootDirectoryListItemMemo } from '../RootDirectoryListItem'

// ==========================================================================================

// interface RootDirectoryListProps {}

const StyledRootDirectoryList = styled('div', {
    '& > header': {
        marginBottom: '$2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',

        '& > section': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',

            '& > span': {
                display: 'flex',
                alignItems: 'center',
                marginRight: '$2',
            },

            '& > h3': {
                userSelect: 'none',
            },
        },

        '& > p': {
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
        },
    },
    '& > li:not(:first-child)': {
        marginTop: '$2',
    },
})

export const RootDirectoryList = () => {
    const { rootDirectory } = useRootDirectory()

    const onClickAddButton = useCallback(async () => {
        const path = (await dialog.open({ directory: true })) as string

        const directory = await rootDirectory.add.mutateAsync(path)
        console.log(directory)

        const found = await rootDirectory.find.mutateAsync(directory.id)
        console.log(found)
    }, [rootDirectory.add, rootDirectory.find])

    return (
        <StyledRootDirectoryList>
            <header>
                <section>
                    <span>
                        <MdOutlineFolder />
                    </span>
                    <h3>LOCAL</h3>
                </section>

                <p onClick={onClickAddButton} role="presentation">
                    <MdAdd />
                </p>
            </header>

            {rootDirectory.query.data && (
                <ul>
                    {rootDirectory.query.data.map((item) => (
                        <li key={item.id}>
                            <RootDirectoryListItemMemo name={item.name} path={item.path} />
                        </li>
                    ))}
                </ul>
            )}
            {rootDirectory.query.isLoading && <div>is loading...</div>}
            {rootDirectory.query.isError && <div>error!</div>}
        </StyledRootDirectoryList>
    )
}
