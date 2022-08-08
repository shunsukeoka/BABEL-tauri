import { useCallback } from 'react'
import { MdDragIndicator, MdMoreVert } from 'react-icons/md'
import { FileTauriCommand } from '../../api'
import { useFile } from '../../hooks/useFile'

interface RootDirectoryListItemProps {
    name?: string
    path?: string
}

export const RootDirectoryListItem = ({ name, path }: RootDirectoryListItemProps) => {
    const { getFiles } = useFile(new FileTauriCommand())

    const handleItemClick = useCallback(() => {
        if (path) getFiles(path)
    }, [getFiles, path])

    const handleSubMenu = useCallback(() => {
        // TODO: implement sub menu feature
    }, [])

    return (
        <div
            className="group relative box-border flex w-full cursor-pointer items-center justify-start pr-4"
            data-path={path}
        >
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
    )
}

RootDirectoryListItem.defaultProps = {
    name: 'Name',
    path: '',
}
