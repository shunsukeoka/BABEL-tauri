import { useState } from 'react'
import { dialog } from '@tauri-apps/api'
import styled from 'styled-components'
import { IFileInfo } from '@/interfaces/file'
import { DirectoryService } from '@/services/DirectoryService'
import { BrowseContainer } from '../layouts/contents/BrowseContainer'

/**
 * Props
 */
interface BrowsePageProps {
    directories: IFileInfo[]
    favorites: IFileInfo[]
    handleAddDirectory?: (event: React.MouseEvent<HTMLInputElement>) => void
}

/**
 * Styled Component
 */
const StyledBrowsePage = styled.section`
    width: auto;
    height: 100%;

    & > section {
        height: 100%;
        padding: 0 24px;
    }
`

/**
 * View Component
 */
const BrowsePageView: React.VFC<BrowsePageProps> = ({
    directories,
    favorites,
    handleAddDirectory,
    ...props
}: BrowsePageProps) => (
    <StyledBrowsePage {...props}>
        <BrowseContainer directories={directories} favorites={favorites} handleAddDirectory={handleAddDirectory} />
    </StyledBrowsePage>
)

/**
 * Component
 */
const BrowsePage: React.VFC = () => {
    const [directories, setDirectories] = useState<IFileInfo[]>([])
    const [favorites] = useState<IFileInfo[]>([])

    const directoryService = new DirectoryService()

    const addDirectory = async () => {
        const path = (await dialog.open({ directory: true })) as string

        const directoryInfo = await directoryService.add(path)

        setDirectories([...directories, directoryInfo])
    }

    return <BrowsePageView directories={directories} favorites={favorites} handleAddDirectory={addDirectory} />
}

/**
 * Export
 */
export { BrowsePage }
