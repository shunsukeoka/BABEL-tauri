use std::fs;
use std::io::Error;
use std::os::windows::prelude::MetadataExt;
use chrono::DateTime;
use chrono::offset::Utc;
use crate::model::file_info::FileInfo;

pub fn read_directory(path: String, file_info_vec: &mut Vec<FileInfo>) -> Result<(), Error> {
    match fs::read_dir(path) {
        Err(why) => Err(why),
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

                    file_info_vec.push(file_info);
                }
            }

            Ok(())
        }
    }
}
