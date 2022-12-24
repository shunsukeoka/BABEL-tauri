import { styled } from '@/styles'
import { memo, useCallback } from 'react'
import { MdDragIndicator, MdMoreVert } from 'react-icons/md'
import { FileTauriCommand } from '../../api'
import { useFile } from '../../hooks/useFile'

interface RootDirectoryListItemProps {
    name?: string
    path?: string
}

const StyledRootDirectoryListItem = styled('div', {
    position: 'relative',
    boxSizing: 'border-box',
    display: 'flex',
    width: '100%',
    fontSize: '10px',
    cursor: 'pointer',
    userSelect: 'none',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: '$4',

    '& > .dragger': {
        display: 'flex',
        alignItems: 'center',
        visibility: 'hidden',
        cursor: 'grab',
    },

    '& > p': {
        marginLeft: '$2',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },

    '& > .submenu': {
        display: 'flex',
        alignItems: 'center',
        visibility: 'hidden',
        position: 'absolute',
        right: '0',
    },

    '&:hover': {
        '& > .dragger, & > .submenu': {
            visibility: 'visible',
        },
    },
})

export const RootDirectoryListItem = ({ name, path }: RootDirectoryListItemProps) => {
    const { getFiles } = useFile(new FileTauriCommand())

    const handleItemClick = useCallback(() => {
        if (path) getFiles(path)
    }, [getFiles, path])

    const handleSubMenu = useCallback(() => {
        // TODO: implement sub menu feature
    }, [])

    return (
        <StyledRootDirectoryListItem data-path={path}>
            {/* TODO: plan - use this library  react-smooth-dnd */}
            <span className="dragger">
                <MdDragIndicator />
            </span>

            <p onClick={handleItemClick} role="presentation">
                {name}
            </p>

            <span className="submenu" onClick={handleSubMenu} role="presentation">
                <MdMoreVert />
            </span>
        </StyledRootDirectoryListItem>
    )
}

RootDirectoryListItem.defaultProps = {
    name: 'Name',
    path: '',
}

export const RootDirectoryListItemMemo = memo(RootDirectoryListItem)
