import { MdDragIndicator, MdMoreVert } from 'react-icons/md'

interface BrowseListItemProps {
    name?: string
}

export const BrowseListItem: React.FC<BrowseListItemProps> = ({ name, ...props }: BrowseListItemProps) => (
    <div className="group relative box-border flex w-full cursor-pointer items-center justify-start pr-4" {...props}>
        <span className="invisible h-4 cursor-grab text-lg group-hover:visible">
            <MdDragIndicator />
        </span>

        <p className="ml-2 overflow-hidden text-ellipsis whitespace-nowrap text-sm leading-[16px]">{name}</p>

        <span className="invisible absolute right-[0] h-4 text-lg group-hover:visible">
            <MdMoreVert />
        </span>
    </div>
)

BrowseListItem.defaultProps = {
    name: 'Name',
}
