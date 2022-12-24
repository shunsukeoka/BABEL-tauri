import React from 'react'
import { MdAdd } from 'react-icons/md'
import { IFileInfo } from '@/types'
import { styled } from '@/styles'
import { RootDirectoryListItemMemo } from '../RootDirectoryListItem'

interface RootDirectoryListProps {
    icon?: React.ReactNode
    title?: string
    list?: IFileInfo[]
    handleAddClick?: (event: React.MouseEvent<HTMLInputElement>) => void
}

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
            cursor: 'pointer',
        },
    },
    '& > ul': {
        '& > li:not(:first-child)': {
            marginTop: '$2',
        },
    },
})

export const RootDirectoryList = ({ icon, title, list, handleAddClick }: RootDirectoryListProps) => (
    <StyledRootDirectoryList>
        <header>
            <section>
                <span>{icon}</span>
                <h3>{title}</h3>
            </section>

            {handleAddClick && (
                <p onClick={handleAddClick} role="presentation">
                    <MdAdd />
                </p>
            )}
        </header>

        <ul>
            {list &&
                list.map((item) => (
                    <li>
                        <RootDirectoryListItemMemo key={item.file_path} name={item.file_name} path={item.file_path} />
                    </li>
                ))}
        </ul>
    </StyledRootDirectoryList>
)

RootDirectoryList.defaultProps = {
    title: 'Title',
    list: [],
}
