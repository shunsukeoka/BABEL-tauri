export interface IFileInfo {
    file_path: string
    file_name: string
    file_size: string
    mime: string
    is_dir: boolean
    is_file: boolean
    is_symlink: boolean
    readonly: boolean
    created_t: string
    modified_t: string
    accessed_t: string
}

export interface IDirectoryRepository {
    fetchAll: () => Promise<IFileInfo[]>
    add: (path: string) => Promise<IFileInfo>
    delete: (path: string) => Promise<IFileInfo>
}

export interface IFileBrowserRepository {
    fetch: (path: string) => Promise<IFileInfo[]>
}
