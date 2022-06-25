#![cfg_attr(
	all(not(debug_assertions), target_os = "windows"),
	windows_subsystem = "windows"
)]

use rodio::cpal::traits::HostTrait;
use std::io::BufReader;

mod command;
mod handler;
mod helper;
mod model;

#[derive(Debug, Clone)]
pub enum AudioPlaybackState {
	LOADING,
	PLAYING,
	PAUSING,
	STOPPING,
}

#[derive(Debug, Clone)]
pub struct AudioState {
	pub playback_state: AudioPlaybackState,
	pub current_file_path: String,
}

fn main() -> anyhow::Result<()> {
	// audio event protocol
	let (audio_event_sender, audio_event_receiver) = crossbeam_channel::bounded::<AudioState>(32);

	// tauri
	tauri::Builder::default()
		.manage(audio_event_sender)
		.invoke_handler(tauri::generate_handler![
			handler::files_event_handler::get_directory_info,
			handler::audio_playback_handler::audio_play
		])
		.setup(|app| {
			// let app_handle = app.handle();

			// let main_window = app.get_window("main").unwrap();

			// audio thread
			std::thread::spawn(move || {
				let host = rodio::cpal::default_host();

				let device = host.default_output_device().unwrap();

				let (_stream, stream_handle) =
					rodio::OutputStream::try_from_device(&device).unwrap();

				let sink = rodio::Sink::try_new(&stream_handle).unwrap();

				loop {
					while let Ok(state) = audio_event_receiver.try_recv() {
						println!("{:?}", state);
						let file = std::fs::File::open(state.current_file_path).unwrap();
						sink.append(
							rodio::Decoder::new(BufReader::new(file.try_clone().unwrap())).unwrap(),
						);
					}
				}
			});

			Ok(())
		})
		.run(tauri::generate_context!())
		.expect("error while running tauri application");

	Ok(())
}
