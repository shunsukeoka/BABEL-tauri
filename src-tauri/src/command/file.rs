use std::fs;
use std::io::Error;
use std::os::windows::prelude::MetadataExt;
use mime_guess;
use crate::model::file_info::FileInfo;
use crate::helper::convert::systemtime2string;

pub fn read_directory(path: String, file_info_vec: &mut Vec<FileInfo>) -> Result<(), Error> {
    match fs::read_dir(path) {
        Err(why) => Err(why),
        Ok(entries) => {
            for entry in entries {
                if let Ok(entry) = entry {
                    let metadata = entry.metadata().unwrap();

                    let file_info = FileInfo {
                        file_path: entry.path(),
                        file_name: entry.file_name().into_string().unwrap(),
                        file_size: metadata.file_size(),
                        mime: mime_guess::from_path(entry.path()).first_raw().unwrap_or("").to_string(),
                        is_dir: metadata.is_dir(),
                        is_file: metadata.is_file(),
                        is_symlink: metadata.is_symlink(),
                        readonly: metadata.permissions().readonly(),
                        created_t: systemtime2string(metadata.created().unwrap()),
                        modified_t: systemtime2string(metadata.modified().unwrap()),
                        accessed_t: systemtime2string(metadata.accessed().unwrap())
                    };

                    file_info_vec.push(file_info);
                }
            }

            Ok(())
        }
    }
}
