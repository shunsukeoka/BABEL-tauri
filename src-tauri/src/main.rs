#![cfg_attr(
	all(not(debug_assertions), target_os = "windows"),
	windows_subsystem = "windows"
)]

mod command;
mod handler;
mod helper;
mod model;

fn main() {
	tauri::Builder::default()
		.invoke_handler(tauri::generate_handler![
			handler::files_event_handler::get_directory_info
		])
		.run(tauri::generate_context!())
		.expect("error while running tauri application");
}
