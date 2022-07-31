import { useState } from 'react'
import { IFileInfo } from '../types'
import { BrowseContainer } from '../components/BrowseContainer'
import { useDirectory } from '../hooks/useDirectory'
import { DirectoryTauriCommand } from '../api/DirectoryTauriCommand'

export const FileBrowser = () => {
    const [favorites] = useState<IFileInfo[]>([])

    const { directories, addDirectory } = useDirectory(new DirectoryTauriCommand())

    return (
        <section className="h-full w-auto [&>section]:h-full [&>section]:px-6">
            <BrowseContainer directories={directories} favorites={favorites} handleAddDirectory={addDirectory} />
        </section>
    )
}
