import { IFileInfo } from '@/types'
import { memo, useCallback } from 'react'
import { timeToDisplayMS } from '@/utils/time'
import { styled } from '@/styles'
// import { FileTauriCommand } from '../../api'
// import { useFile } from '../../hooks/useFile'

export interface FileListItemProps {
    info: IFileInfo
}

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

export const FileListItem = ({ info }: FileListItemProps) => {
    // const { getFiles } = useFile(new FileTauriCommand())

    const handleDoubleClick = useCallback(() => {
        // if (info.audio_properties) {
        // } else if (info.is_dir) {
        //     getFiles(info.file_path)
        // }
    }, [])

    return (
        <StyledFileListItem onDoubleClick={handleDoubleClick}>
            <p>{info?.file_name}</p>
            <p>{info?.audio_properties ? timeToDisplayMS(info.audio_properties.duration) : ''}</p>
        </StyledFileListItem>
    )
}

export const FileListItemMemo = memo(FileListItem)
