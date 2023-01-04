#![cfg_attr(
	all(not(debug_assertions), target_os = "windows"),
	windows_subsystem = "windows"
)]

use std::sync::Arc;

mod db;
mod file;
mod helper;
mod router;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
	println!("{}", env!("CARGO_MANIFEST_DIR"));
	let db_client = Arc::new(db::new_client().await.unwrap());

	#[cfg(debug_assertions)]
	db_client._db_push().await.unwrap();

	let router = router::mount();
	let builder = tauri::Builder::default()
		.plugin(rspc::integrations::tauri::plugin(router, move || {
			router::Ctx {
				db_client: db_client.clone(),
			}
		}))
		.invoke_handler(tauri::generate_handler![
			file::add_directory,
			file::get_directory_info
		])
		.build(tauri::generate_context!())
		.expect("error while running tauri application");

	builder.run(|_, _| ());
	Ok(())
}
