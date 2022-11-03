use crate::helper::convert::systemtime2string;
use lofty::{AudioFile, Probe};
use serde::Deserialize;
use serde::Serialize;
use std::fs;
use std::fs::Metadata;
use std::path::Path;
use std::path::PathBuf;
use std::sync::Arc;
use std::sync::Mutex;

#[derive(Debug, Serialize, Deserialize, Clone, PartialEq, PartialOrd)]
pub struct AudioProperties {
	pub channels: Option<u8>,
	pub bit_depth: Option<u8>,
	pub sample_rate: Option<u32>,
	pub duration: f64,
}

#[derive(Debug, Serialize, Deserialize, Clone, PartialEq, PartialOrd)]
pub struct FileInfo {
	pub file_path: PathBuf,
	pub file_name: String,
	pub file_size: u64,
	pub mime: String,
	pub is_dir: bool,
	pub is_file: bool,
	pub is_symlink: bool,
	pub readonly: bool,
	pub audio_properties: Option<AudioProperties>,
	pub created_t: String,
	pub modified_t: String,
	pub accessed_t: String,
}

#[derive(Debug)]
pub struct FileInfoSerializer {
	pub path: PathBuf,
	pub metadata: Metadata,
}

impl FileInfoSerializer {
	pub fn new(path: &Path) -> anyhow::Result<Self> {
		let metadata = path.metadata()?;

		Ok(Self {
			path: path.to_path_buf(),
			metadata,
		})
	}

	pub fn get_file_name(&self) -> String {
		self.path
			.file_name()
			.map_or("".to_string(), |name| name.to_string_lossy().to_string())
	}

	pub fn get_file_size(&self) -> u64 {
		self.metadata.len()
	}

	pub fn get_mime_type(&self) -> String {
		mime_guess::from_path(&self.path)
			.first_raw()
			.map_or("".to_string(), |mime| mime.to_string())
	}

	pub fn is_directory(&self) -> bool {
		self.metadata.is_dir()
	}

	pub fn is_file(&self) -> bool {
		self.metadata.is_file()
	}

	pub fn is_symlink(&self) -> bool {
		self.metadata.is_symlink()
	}

	pub fn is_readonly(&self) -> bool {
		self.metadata.permissions().readonly()
	}

	pub fn get_created_time(&self) -> String {
		self.metadata
			.created()
			.map_or("".to_string(), systemtime2string)
	}

	pub fn get_modified_time(&self) -> String {
		self.metadata
			.modified()
			.map_or("".to_string(), systemtime2string)
	}

	pub fn get_accessed_time(&self) -> String {
		self.metadata
			.accessed()
			.map_or("".to_string(), systemtime2string)
	}

	pub fn create_audio_properties(&self) -> Option<AudioProperties> {
		Probe::open(&self.path).map_or(None, |tagged_file| {
			tagged_file.read().map_or(None, |tag| {
				let properties = tag.properties();

				Some(AudioProperties {
					channels: properties.channels(),
					bit_depth: properties.bit_depth(),
					sample_rate: properties.sample_rate(),
					duration: properties.duration().as_secs_f64(),
				})
			})
		})
	}

	pub fn serialize(&self) -> FileInfo {
		FileInfo {
			file_path: self.path.clone(),
			file_name: self.get_file_name(),
			file_size: self.get_file_size(),
			mime: self.get_mime_type(),
			is_dir: self.is_directory(),
			is_file: self.is_file(),
			is_symlink: self.is_symlink(),
			readonly: self.is_readonly(),
			audio_properties: self.create_audio_properties(),
			created_t: self.get_created_time(),
			modified_t: self.get_modified_time(),
			accessed_t: self.get_accessed_time(),
		}
	}
}

pub fn read_directory(path: &String) -> Vec<FileInfo> {
	let mut handles = vec![];
	let file_info_vec = Arc::new(Mutex::new(vec![]));

	if let Ok(entries) = fs::read_dir(path) {
		for entry in entries.flatten() {
			let file_info_vec = Arc::clone(&file_info_vec);

			handles.push(std::thread::spawn(move || {
				let _ = FileInfoSerializer::new(&entry.path()).map(|serializer| {
					let file_info = serializer.serialize();
					file_info_vec.lock().unwrap().push(file_info);
				});
			}));
		}
	}

	handles
		.into_iter()
		.for_each(|handle| handle.join().unwrap_or(()));

	let mut file_list = file_info_vec.lock().map_or(vec![], |list| list.to_vec());

	// TODO: file_name以外にもソート指定を可能にする。
	// TODO: 降順にも対応する。file_list.sort_by(|a, b| b.file_name.cmp(&a.file_name));
	file_list.sort_by(|a, b| a.file_name.cmp(&b.file_name));

	file_list
}

pub fn read_file(path: &String) -> Option<FileInfo> {
	FileInfoSerializer::new(&PathBuf::from(path))
		.map_or(None, |serializer| Some(serializer.serialize()))
}

#[derive(Debug, Serialize)]
pub struct Response<T> {
	success: bool,
	payload: Option<T>,
	err_msg: Option<String>,
}

#[tauri::command]
pub fn get_directory_info(path: String) -> Response<Vec<FileInfo>> {
	let file_info_vec = read_directory(&path);

	Response {
		success: true,
		payload: Some(file_info_vec),
		err_msg: None,
	}
}

#[tauri::command]
pub fn add_directory(path: String) -> Response<FileInfo> {
	let file_info = read_file(&path);

	Response {
		success: true,
		payload: file_info,
		err_msg: None,
	}
}
