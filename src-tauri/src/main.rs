#![cfg_attr(
	all(not(debug_assertions), target_os = "windows"),
	windows_subsystem = "windows"
)]

mod file;
mod helper;

fn main() -> anyhow::Result<()> {
	tauri::Builder::default()
		.invoke_handler(tauri::generate_handler![
			file::add_directory,
			file::get_directory_info
		])
		.setup(move |app| {
			// let app_handle = app.handle();

			// let main_window = app.get_window("main").unwrap();

			Ok(())
		})
		.run(tauri::generate_context!())
		.expect("error while running tauri application");

	Ok(())
}
