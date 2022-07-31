import React from 'react'

export interface FileItemProps {
    path: string
    name?: string
    audioLength?: string
    handleDoubleClick?: (event: React.MouseEvent<HTMLInputElement>) => void
}

export const FileItem = React.forwardRef<HTMLDivElement, FileItemProps>(
    ({ path, name, audioLength, handleDoubleClick }: FileItemProps, ref) => (
        <div
            className="flex cursor-pointer items-center justify-between overflow-hidden px-2 py-4 text-sm hover:opacity-60 not-first-child:border-t-[1px] not-first-child:border-solid not-first-child:border-t-[#efefef]"
            ref={ref}
            onDoubleClick={handleDoubleClick}
            data-path={path}
        >
            <p className="overflow-hidden text-ellipsis whitespace-nowrap">{name}</p>
            <p className="text-sm">{audioLength}</p>
        </div>
    ),
)

FileItem.defaultProps = {
    name: '',
    audioLength: '00:00',
}
