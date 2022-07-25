import { MdOutlineFolder, MdStarOutline } from 'react-icons/md'
import { IFileInfo } from '@/interfaces/file'
import { BrowseList } from './BrowseList'

interface BrowseContainerProps {
    favorites?: IFileInfo[]
    directories?: IFileInfo[]
    handleAddDirectory?: (event: React.MouseEvent<HTMLInputElement>) => void
}

export const BrowseContainer: React.FC<BrowseContainerProps> = ({
    favorites,
    directories,
    handleAddDirectory,
    ...props
}: BrowseContainerProps) => (
    <section className="min-w-[200px]" {...props}>
        <div className="py-4">
            <BrowseList title="Favorites" icon={<MdStarOutline />} browseList={favorites} />
        </div>

        <div className="py-4">
            <BrowseList
                title="Local"
                icon={<MdOutlineFolder />}
                browseList={directories}
                handleAddClick={handleAddDirectory}
            />
        </div>
    </section>
)

BrowseContainer.defaultProps = {
    favorites: [],
    directories: [],
    handleAddDirectory: (event) => {
        event.preventDefault()
    },
}
