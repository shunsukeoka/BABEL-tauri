use std::fs;

#[tauri::command]
pub fn get_directory_info(path: String) {
    println!("directory path : {}", path);

    // ディレクトリの内容を読み込む。返り値は`io::Result<Vec<Path>>`
    match fs::read_dir(path) {
        Err(why) => println!("! {:?}", why.kind()),
        Ok(paths) => {
            for path in paths {
                println!("{:?}", path.unwrap().path());
            }
        }
    }
}
