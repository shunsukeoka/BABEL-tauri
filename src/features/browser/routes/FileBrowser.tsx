import { MdOutlineFolder, MdStarOutline } from 'react-icons/md'
import { useAudioPlayback } from '../../../hooks/useAudioPlayback'
import { useDirectory } from '../hooks/useDirectory'
import { DirectoryTauriCommand, FileTauriCommand } from '../api'
import { RootDirectoryList, FileList } from '../components'
import { useFile } from '../hooks/useFile'

export const FileBrowser = () => {
    const { directories, directoryElementRef, addDirectory } = useDirectory(new DirectoryTauriCommand())
    const { files, getFiles } = useFile(new FileTauriCommand())
    const { play } = useAudioPlayback()

    return (
        <div className="flex h-full w-auto justify-between [&>section]:h-full [&>section]:px-6">
            <section className="min-w-[200px] [&>div]:py-4">
                <RootDirectoryList key="Favorite" title="Favorites" icon={<MdStarOutline />} />

                <RootDirectoryList
                    ref={directoryElementRef}
                    key="Local"
                    title="Local"
                    icon={<MdOutlineFolder />}
                    list={directories}
                    handleAddClick={addDirectory}
                    handleItemClick={() => getFiles(directoryElementRef)}
                />
            </section>

            <section className="mr-4 h-[calc(100vh-78px)] min-w-[320px] overflow-y-scroll scrollbar-hidden">
                <FileList list={files} handleDoubleClickItem={play} />
            </section>
        </div>
    )
}
