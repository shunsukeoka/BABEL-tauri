use serde::Serialize;
use std::path::PathBuf;

#[derive(Serialize)]
pub struct FileInfo {
	pub file_path: PathBuf,
	pub file_name: String,
	pub file_size: u64,
	pub mime: String,
	pub is_dir: bool,
	pub is_file: bool,
	pub is_symlink: bool,
	pub readonly: bool,
	pub created_t: String,
	pub modified_t: String,
	pub accessed_t: String,
}
