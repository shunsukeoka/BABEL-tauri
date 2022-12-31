#![cfg_attr(
	all(not(debug_assertions), target_os = "windows"),
	windows_subsystem = "windows"
)]

mod api;
mod file;
mod helper;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
	let router = api::mount();
	let builder = tauri::Builder::default()
		.plugin(rspc::integrations::tauri::plugin(router, || api::Ctx {}))
		.invoke_handler(tauri::generate_handler![
			file::add_directory,
			file::get_directory_info
		])
		.build(tauri::generate_context!())
		.expect("error while running tauri application");

	builder.run(|_, _| ());
	Ok(())
}
