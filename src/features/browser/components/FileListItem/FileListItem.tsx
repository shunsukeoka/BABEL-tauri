import { memo, useCallback } from 'react'
// import { timeToDisplayMS } from '@/core/utils/time'
import { styled } from '@/styles'

// export interface FileListItemProps {}

const StyledFileListItem = styled('div', {
    display: 'flex',
    cursor: 'pointer',
    userSelect: 'none',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    padding: '$2 $4',
    fontSize: '10px',

    '&:hover': {
        opacity: 0.6,
    },

    '&:not(:first-child)': {
        borderTop: '1px solid#efefef',
    },

    '& > p': {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
})

export const FileListItem = () => {
    const handleDoubleClick = useCallback(() => {

    }, [])

    return (
        <StyledFileListItem onDoubleClick={handleDoubleClick}>
            {/* <p>{info?.file_name}</p>
            <p>{info?.audio_properties ? timeToDisplayMS(info.audio_properties.duration) : ''}</p> */}
        </StyledFileListItem>
    )
}

export const FileListItemMemo = memo(FileListItem)
