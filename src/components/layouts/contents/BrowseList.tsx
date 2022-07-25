import { MdAdd } from 'react-icons/md'
import { IFileInfo } from '@/interfaces/file'
import { BrowseListItem } from './BrowseListItem'

interface BrowseListProps {
    icon?: React.ReactNode
    title?: string
    browseList?: IFileInfo[]
    handleAddClick?: (event: React.MouseEvent<HTMLInputElement>) => void
}

export const BrowseList: React.FC<BrowseListProps> = ({
    icon,
    title,
    browseList,
    handleAddClick,
    ...props
}: BrowseListProps) => (
    <div {...props}>
        <header className="mb-2 flex w-full items-center justify-between">
            <section className="flex items-center justify-start text-lg">
                <span className="mr-2 h-4">{icon}</span>
                <h3 className="font-roboto font-light tracking-wider">{title}</h3>
            </section>

            {handleAddClick && (
                <p className="cursor-pointer text-lg" onClick={handleAddClick} role="presentation">
                    <MdAdd />
                </p>
            )}
        </header>

        <ul>
            {browseList &&
                browseList.map((item) => (
                    <li className="not-first-child:mt-2">
                        <BrowseListItem key={item.file_path} name={item.file_name} />
                    </li>
                ))}
        </ul>
    </div>
)

BrowseList.defaultProps = {
    title: 'Title',
    browseList: [],
}
