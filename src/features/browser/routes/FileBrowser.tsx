import { MdOutlineFolder, MdStarOutline } from 'react-icons/md'
import { useDirectory } from '../hooks/useDirectory'
import { DirectoryTauriCommand } from '../api'
import { RootDirectoryList, FileList } from '../components'
import { useFileStore } from '../stores'

export const FileBrowser = () => {
    const { directories, addDirectory } = useDirectory(new DirectoryTauriCommand())
    const files = useFileStore((state) => state.list)

    return (
        <div className="flex h-full w-auto justify-between [&>section]:h-full [&>section]:px-6">
            <section className="min-w-[200px] [&>div]:py-4">
                <RootDirectoryList key="Favorite" title="Favorites" icon={<MdStarOutline />} />

                <RootDirectoryList
                    key="Local"
                    title="Local"
                    icon={<MdOutlineFolder />}
                    list={directories}
                    handleAddClick={addDirectory}
                />
            </section>

            <section className="mr-4 h-[calc(100vh-78px)] min-w-[320px] overflow-y-scroll scrollbar-hidden">
                <FileList list={files} />
            </section>
        </div>
    )
}
