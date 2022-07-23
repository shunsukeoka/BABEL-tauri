use crate::helper::convert::systemtime2string;
use crate::model::file_info::FileInfo;
use anyhow::{Context, Result};
use mime_guess;
use std::fs;
use std::path::Path;
use std::rc::Rc;
use thiserror::Error;

#[derive(Debug, Error)]
enum FileInfoError {
	#[error("ディレクトリの読み込みに失敗しました。: {0}")]
	ReadDirectoryError(String),

	#[error("メタデータの読み込みに失敗しました。")]
	ReadMetadataError(),
}

pub fn read_directory(path: &String, file_info_vec: &mut Vec<FileInfo>) -> Result<()> {
	let entries =
		fs::read_dir(path).context(FileInfoError::ReadDirectoryError(path.to_string()))?;

	for entry in entries {
		if let Ok(entry) = entry {
			let entry_ptr = Rc::new(&entry);

			let metadata = entry_ptr
				.metadata()
				.context(FileInfoError::ReadMetadataError())?;

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
						.context(FileInfoError::ReadMetadataError())?,
				),
				modified_t: systemtime2string(
					metadata
						.modified()
						.context(FileInfoError::ReadMetadataError())?,
				),
				accessed_t: systemtime2string(
					metadata
						.accessed()
						.context(FileInfoError::ReadMetadataError())?,
				),
			};

			file_info_vec.push(file_info);
		} else {
			Err(FileInfoError::ReadDirectoryError(path.to_string()))?;
		}
	}

	Ok(())
}

pub fn read_file(path: &String) -> Result<FileInfo> {
	let entry = Path::new(path);

	let metadata = entry
		.metadata()
		.context(FileInfoError::ReadMetadataError())?;

	let file_info = FileInfo {
		file_path: entry.to_path_buf(),
		file_name: entry
			.file_name()
			.unwrap()
			.to_os_string()
			.into_string()
			.unwrap_or("".to_string()),
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
				.context(FileInfoError::ReadMetadataError())?,
		),
		modified_t: systemtime2string(
			metadata
				.modified()
				.context(FileInfoError::ReadMetadataError())?,
		),
		accessed_t: systemtime2string(
			metadata
				.accessed()
				.context(FileInfoError::ReadMetadataError())?,
		),
	};

	Ok(file_info)
}
