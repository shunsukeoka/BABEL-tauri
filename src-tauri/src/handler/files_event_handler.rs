use crate::command::file::read_directory;
use crate::model::file_info::FileInfo;
use serde_json::json;

#[tauri::command]
pub fn get_directory_info(path: String) -> serde_json::Value {
    let mut success = true;
    let mut data: Vec<FileInfo> = Vec::new();
    let mut err_msg: String = "".to_string();

    match read_directory(&path, &mut data) {
        Err(msg) => {
            success = false;
            err_msg = msg.to_string();
        }
        Ok(_) => (),
    }

    return json!({
        "success": success,
        "data": data,
        "err_msg": err_msg
    });
}
