import React from 'react'
import { MdAdd } from 'react-icons/md'
import { IFileInfo } from '../../types'
import { RootDirectoryListItem } from './RootDirectoryListItem'

interface RootDirectoryListProps {
    icon?: React.ReactNode
    title?: string
    list?: IFileInfo[]
    handleAddClick?: (event: React.MouseEvent<HTMLInputElement>) => void
    handleItemClick?: (event: React.MouseEvent<HTMLInputElement>) => void
    handleSubMenu?: (event: React.MouseEvent<HTMLInputElement>) => void
}

export const RootDirectoryList = React.forwardRef<HTMLDivElement, RootDirectoryListProps>(
    ({ icon, title, list, handleAddClick, handleItemClick, handleSubMenu, ...props }: RootDirectoryListProps, ref) => (
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
                {list &&
                    list.map((item) => (
                        <li className="not-first-child:mt-2">
                            <RootDirectoryListItem
                                ref={ref}
                                key={item.file_path}
                                name={item.file_name}
                                handleItemClick={handleItemClick}
                                handleSubMenu={handleSubMenu}
                            />
                        </li>
                    ))}
            </ul>
        </div>
    ),
)

RootDirectoryList.defaultProps = {
    title: 'Title',
    list: [],
}
