use crate::helper::convert::systemtime2string;
use anyhow::{Context, Result};
use serde::Serialize;
use std::fs;
use std::path::Path;
use std::path::PathBuf;
use std::rc::Rc;
use thiserror::Error;

#[derive(Debug, Error)]
pub enum FileInfoError {
	#[error("ディレクトリの読み込みに失敗しました。: {0}")]
	ReadDirectoryError(String),

	#[error("メタデータの読み込みに失敗しました。")]
	ReadMetadataError(),
}

#[derive(Debug, Serialize)]
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

pub fn read_directory(path: &String) -> anyhow::Result<Vec<FileInfo>, FileInfoError> {
	let mut file_info_vec = vec![];

	if let Ok(entries) =
		fs::read_dir(path).context(FileInfoError::ReadDirectoryError(path.to_string()))
	{
		for entry in entries {
			if let Ok(entry) = entry {
				let entry_ptr = Rc::new(&entry);

				let metadata = entry_ptr
					.metadata()
					.context(FileInfoError::ReadMetadataError())
					.unwrap();

				let file_info = FileInfo {
					file_path: entry_ptr.path(),
					file_name: entry_ptr
						.file_name()
						.into_string()
						.unwrap_or("".to_string()),
					file_size: metadata.len(),
					mime: mime_guess::from_path(entry_ptr.path())
						.first_raw()
						.unwrap_or("")
						.to_string(),
					is_dir: metadata.is_dir(),
					is_file: metadata.is_file(),
					is_symlink: metadata.is_symlink(),
					readonly: metadata.permissions().readonly(),
					created_t: systemtime2string(
						metadata
							.created()
							.context(FileInfoError::ReadMetadataError())
							.unwrap(),
					),
					modified_t: systemtime2string(
						metadata
							.modified()
							.context(FileInfoError::ReadMetadataError())
							.unwrap(),
					),
					accessed_t: systemtime2string(
						metadata
							.accessed()
							.context(FileInfoError::ReadMetadataError())
							.unwrap(),
					),
				};

				file_info_vec.push(file_info);
			} else {
				Err(FileInfoError::ReadDirectoryError(path.to_string()))?;
			}
		}
	} else {
		Err(FileInfoError::ReadDirectoryError(path.to_string()))?;
	};

	Ok(file_info_vec)
}

pub fn read_file(path: &String) -> anyhow::Result<FileInfo, FileInfoError> {
	let entry = Path::new(path);

	let metadata = entry
		.metadata()
		.context(FileInfoError::ReadMetadataError())
		.unwrap();

	let file_info = FileInfo {
		file_path: entry.to_path_buf(),
		file_name: entry
			.file_name()
			.unwrap()
			.to_os_string()
			.into_string()
			.unwrap_or_else(|_| "".to_string()),
		file_size: metadata.len(),
		mime: mime_guess::from_path(entry)
			.first_raw()
			.unwrap_or("")
			.to_string(),
		is_dir: metadata.is_dir(),
		is_file: metadata.is_file(),
		is_symlink: metadata.is_symlink(),
		readonly: metadata.permissions().readonly(),
		created_t: systemtime2string(
			metadata
				.created()
				.context(FileInfoError::ReadMetadataError())
				.unwrap(),
		),
		modified_t: systemtime2string(
			metadata
				.modified()
				.context(FileInfoError::ReadMetadataError())
				.unwrap(),
		),
		accessed_t: systemtime2string(
			metadata
				.accessed()
				.context(FileInfoError::ReadMetadataError())
				.unwrap(),
		),
	};

	Ok(file_info)
}

#[derive(Debug, Serialize)]
pub struct Response<T> {
	success: bool,
	payload: Option<T>,
	err_msg: Option<String>,
}

#[tauri::command]
pub fn get_directory_info(path: String) -> Response<Vec<FileInfo>> {
	match read_directory(&path) {
		Err(msg) => {
			return Response {
				success: false,
				payload: None,
				err_msg: Some(msg.to_string()),
			}
		}
		Ok(file_info_vec) => {
			return Response {
				success: true,
				payload: Some(file_info_vec),
				err_msg: None,
			}
		}
	}
}

#[tauri::command]
pub fn add_directory(path: String) -> Response<FileInfo> {
	match read_file(&path) {
		Err(msg) => {
			return Response {
				success: false,
				payload: None,
				err_msg: Some(msg.to_string()),
			}
		}
		Ok(file_info) => {
			return Response {
				success: true,
				payload: Some(file_info),
				err_msg: None,
			}
		}
	}
}
