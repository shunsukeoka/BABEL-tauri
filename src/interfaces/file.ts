export interface IFIleInfo {
    file_path: string;
    file_name: string;
    file_size: number;
    mime: string;
    is_dir: boolean;
    is_file: boolean;
    is_symlink: boolean;
    readonly: boolean;
    created_t: string;
    modified_t: string;
    accessed_t: string;
}
