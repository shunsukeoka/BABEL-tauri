#![cfg_attr(
	all(not(debug_assertions), target_os = "windows"),
	windows_subsystem = "windows"
)]

use audio::AudioEngine;
use std::sync::{Arc, Mutex};
use tauri::Manager;

mod audio;
mod file;
mod helper;

fn main() -> anyhow::Result<()> {
	let builder = tauri::Builder::default()
		.invoke_handler(tauri::generate_handler![
			audio::play,
			audio::pause,
			audio::resume,
			audio::stop,
			audio::seek,
			audio::set_master_volume,
			audio::get_playback_state,
			file::add_directory,
			file::get_directory_info
		])
		.build(tauri::generate_context!())
		.expect("error while running tauri application");

	// audio state
	let audio_engine = Arc::new(Mutex::new(
		AudioEngine::new().expect("error initialize audio engine"),
	));
	builder.manage(audio_engine);

	builder.run(|_, _| ());
	Ok(())
}
