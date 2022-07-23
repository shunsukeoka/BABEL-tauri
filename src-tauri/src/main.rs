#![cfg_attr(
	all(not(debug_assertions), target_os = "windows"),
	windows_subsystem = "windows"
)]

use command::audio::{setup_audio_thread, AudioEngine};
use model::{
	app::AppState,
	audio::{AudioState, AudioStateCommands},
};
use std::sync::{Arc, Mutex};

mod command;
mod handler;
mod helper;
mod model;

fn main() -> anyhow::Result<()> {
	// audio event protocol
	let (audio_commands_sender, audio_commands_receiver) =
		crossbeam_channel::bounded::<AudioStateCommands>(32);

	let audio_engine = Arc::new(Mutex::new(
		AudioEngine::new(audio_commands_receiver).unwrap(),
	));

	let audio_state = Arc::new(Mutex::new(AudioState::new(audio_commands_sender)));

	let app_state = AppState { audio_state };

	// tauri
	tauri::Builder::default()
		.manage(app_state)
		.invoke_handler(tauri::generate_handler![
			handler::files_event_handler::get_directory_info,
			handler::directories_event_handler::add_directory,
			handler::audio_playback_handler::audio_play
		])
		.setup(move |app| {
			// let app_handle = app.handle();

			// let main_window = app.get_window("main").unwrap();

			// audio thread
			setup_audio_thread(app, audio_engine);

			Ok(())
		})
		.run(tauri::generate_context!())
		.expect("error while running tauri application");

	Ok(())
}
