export interface AudioProperties {
    channels: number
    bit_depth: number
    sample_rate: number
    duration: number
}

export interface IFileInfo {
    file_path: string
    file_name: string
    file_size: number
    mime: string
    is_dir: boolean
    is_file: boolean
    is_symlink: boolean
    readonly: boolean
    audio_properties: AudioProperties | null
    created_t: string
    modified_t: string
    accessed_t: string
}

export interface IResponse<T> {
    success: boolean
    payload: T
    err_msg: string
}
