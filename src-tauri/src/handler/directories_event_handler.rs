use crate::command::file::read_file;
use crate::model::file_info::FileInfo;
use serde_json::json;

#[tauri::command]
pub fn add_directory(path: String) -> serde_json::Value {
	let mut success = true;
	let mut data: Option<FileInfo> = None;
	let mut err_msg: String = "".to_string();

	match read_file(&path) {
		Err(msg) => {
			success = false;
			err_msg = msg.to_string();
		}
		Ok(file_info) => data = Some(file_info),
	}

	return json!({
		"success": success,
		"data": data,
		"err_msg": err_msg
	});
}
