#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod handler;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            handler::files_event_handler::get_directories_recursive
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
