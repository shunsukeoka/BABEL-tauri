// import styled from 'styled-components'
import { invoke } from '@tauri-apps/api/tauri'
import { Tags, TagProps } from '@/components/Elements/Tag'

export interface FileItemProps {
    path: string
    name?: string
    fileType?: string
    audioLength?: string
    tags?: TagProps[]
    handleDoubleClick?: (event: React.MouseEvent<HTMLInputElement>) => void
}

export const FileItem: React.FC<FileItemProps> = ({
    path,
    name,
    fileType,
    audioLength,
    tags,
    handleDoubleClick,
    ...props
}: FileItemProps) => (
    <div
        className="cursor-pointer overflow-hidden p-4 hover:opacity-60 not-first-child:border-t-2 not-first-child:border-solid not-first-child:border-t-[#efefef]"
        {...props}
        onDoubleClick={handleDoubleClick}
        data-path={path}
    >
        <h3 className="overflow-hidden text-ellipsis whitespace-nowrap text-xs">{name}</h3>
        <div className="my-2 flex items-center justify-between text-xs">
            <p>{fileType}</p>
            <p>{audioLength}</p>
        </div>
        <Tags tags={tags} />
    </div>
)

FileItem.defaultProps = {
    name: '',
    fileType: '',
    audioLength: '00:00',
    tags: [],
    handleDoubleClick: async (event) => {
        event.preventDefault()
        const path = event.currentTarget.getAttribute('data-path')
        await invoke('audio_play', { path })
    },
}
