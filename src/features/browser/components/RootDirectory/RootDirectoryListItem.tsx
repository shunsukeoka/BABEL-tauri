import React from 'react'
import { MdDragIndicator, MdMoreVert } from 'react-icons/md'

interface RootDirectoryListItemProps {
    name?: string
    handleItemClick?: (event: React.MouseEvent<HTMLInputElement>) => void
    handleSubMenu?: (event: React.MouseEvent<HTMLInputElement>) => void
}

export const RootDirectoryListItem = React.forwardRef<HTMLDivElement, RootDirectoryListItemProps>(
    ({ name, handleItemClick, handleSubMenu }: RootDirectoryListItemProps, ref) => (
        <div className="group relative box-border flex w-full cursor-pointer items-center justify-start pr-4" ref={ref}>
            {/* TODO: plan - use this library  react-smooth-dnd */}
            <span className="invisible h-4 cursor-grab text-lg group-hover:visible">
                <MdDragIndicator />
            </span>

            <p
                className="ml-2 overflow-hidden text-ellipsis whitespace-nowrap text-sm leading-[16px]"
                onClick={handleItemClick}
                role="presentation"
            >
                {name}
            </p>

            <span
                className="invisible absolute right-[0] h-4 text-lg group-hover:visible"
                onClick={handleSubMenu}
                role="presentation"
            >
                <MdMoreVert />
            </span>
        </div>
    ),
)

RootDirectoryListItem.defaultProps = {
    name: 'Name',
}
