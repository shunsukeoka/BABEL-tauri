use std::path::PathBuf;
use std::fs;
use std::os::windows::prelude::MetadataExt;
use serde::Serialize;
use serde_json::json;
use chrono::DateTime;
use chrono::offset::Utc;

#[derive(Serialize)]
struct  FileInfo {
    file_path: PathBuf,
    file_name: String,
    file_size: u64,
    is_dir: bool,
    is_file: bool,
    is_symlink: bool,
    readonly: bool,
    created_t: String,
    modified_t: String,
    accessed_t: String
}

#[tauri::command]
pub fn get_directory_info(path: String) -> serde_json::Value {
    let mut success = true;
    let mut data: Vec<FileInfo> = Vec::new();

    // ディレクトリの内容を読み込む。返り値は`io::Result<Vec<Path>>`
    match fs::read_dir(path) {
        Err(_) => success = false,
        Ok(entries) => {
            for entry in entries {
                if let Ok(entry) = entry {
                    let metadata = entry.metadata().unwrap();

                    // TODO : SystemTimeからStringへの変換を行う処理を関数にしてまとめる
                    let created_t: DateTime<Utc> = metadata.created().unwrap().into();
                    let modified_t: DateTime<Utc> = metadata.modified().unwrap().into();
                    let accessed_t: DateTime<Utc> = metadata.accessed().unwrap().into();

                    let file_info = FileInfo {
                        file_path: entry.path(),
                        file_name: entry.file_name().into_string().unwrap(),
                        file_size: metadata.file_size(),
                        is_dir: metadata.is_dir(),
                        is_file: metadata.is_file(),
                        is_symlink: metadata.is_symlink(),
                        readonly: metadata.permissions().readonly(),
                        created_t: created_t.format("%d/%m/%Y %T").to_string(),
                        modified_t: modified_t.format("%d/%m/%Y %T").to_string(),
                        accessed_t: accessed_t.format("%d/%m/%Y %T").to_string()
                    };

                    data.push(file_info);
                }
            }
        }
    }

    return json!({
        "success": success,
        "data": data
    });
}
