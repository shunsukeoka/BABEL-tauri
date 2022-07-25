import { useState } from 'react'
import { dialog } from '@tauri-apps/api'
import { IFileInfo } from '@/interfaces/file'
import { DirectoryService } from '@/services/DirectoryService'
import { BrowseContainer } from '../layouts/contents/BrowseContainer'

interface BrowsePageProps {}

export const BrowsePage: React.FC<BrowsePageProps> = ({ ...props }: BrowsePageProps) => {
    const [directories, setDirectories] = useState<IFileInfo[]>([])
    const [favorites] = useState<IFileInfo[]>([])

    const directoryService = new DirectoryService()

    const addDirectory = async () => {
        const path = (await dialog.open({ directory: true })) as string

        const directoryInfo = await directoryService.add(path)

        setDirectories([...directories, directoryInfo])
    }

    return (
        <section className="h-full w-auto [&>section]:h-full [&>section]:px-6" {...props}>
            <BrowseContainer directories={directories} favorites={favorites} handleAddDirectory={addDirectory} />
        </section>
    )
}
