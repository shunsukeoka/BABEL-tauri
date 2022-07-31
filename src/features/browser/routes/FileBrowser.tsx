import { MdOutlineFolder, MdStarOutline } from 'react-icons/md'
import { useDirectory } from '../hooks/useDirectory'
import { DirectoryTauriCommand, FileTauriCommand } from '../api'
import { RootDirectoryList, FileList } from '../components'
import { useFile } from '../hooks/useFile'

export const FileBrowser = () => {
    const { directories, directoryElementRef, addDirectory, selectDirectory } = useDirectory(
        new DirectoryTauriCommand(),
    )
    const { files } = useFile(new FileTauriCommand())

    return (
        <div className="h-full w-auto [&>section]:h-full [&>section]:px-6">
            <section className="min-w-[200px] [&>div]:py-4">
                <RootDirectoryList key="Favorite" title="Favorites" icon={<MdStarOutline />} />

                <RootDirectoryList
                    ref={directoryElementRef}
                    key="Local"
                    title="Local"
                    icon={<MdOutlineFolder />}
                    list={directories}
                    handleAddClick={addDirectory}
                    handleItemClick={selectDirectory}
                />
            </section>

            <section>
                <FileList list={files} />
            </section>
        </div>
    )
}
