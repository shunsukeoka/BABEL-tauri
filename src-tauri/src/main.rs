#![cfg_attr(
	all(not(debug_assertions), target_os = "windows"),
	windows_subsystem = "windows"
)]

use rodio::cpal::traits::HostTrait;
use std::{
	fs::File,
	io::BufReader,
	sync::{Arc, Mutex}, clone,
};

mod command;
mod handler;
mod helper;
mod model;

#[derive(Debug, Clone)]
pub struct AppState {
	pub audio_state: Arc<Mutex<AudioState>>,
}

#[derive(Debug)]
pub struct AudioState {
	pub command_sender: crossbeam_channel::Sender<AudioCommands>,
	pub playback_state: AudioPlaybackState,
	pub current_file: Option<File>,
}

#[derive(Debug)]
pub enum AudioCommands {
	PlayAudioFile,
}

#[derive(Debug, Clone)]
pub enum AudioPlaybackState {
	LOADING,
	PLAYING,
	PAUSING,
	STOPPING,
}

fn setup_audio_thread(
	app: &mut tauri::App,
	state: Arc<Mutex<AudioState>>,
	audio_event_receiver: crossbeam_channel::Receiver<AudioCommands>,
) {
	std::thread::spawn(move || {
		let host = rodio::cpal::default_host();

		let device = host.default_output_device().unwrap();

		let (_stream, stream_handle) = rodio::OutputStream::try_from_device(&device).unwrap();

		let sink = rodio::Sink::try_new(&stream_handle).unwrap();

		loop {
			while let Ok(command) = audio_event_receiver.try_recv() {
				println!("{:?}", command);

				let audio_state = state.lock().unwrap();

				match command {
					AudioCommands::PlayAudioFile => {
						let file = audio_state.current_file.as_ref().unwrap();

						sink.append(
							rodio::Decoder::new(BufReader::new(file.try_clone().unwrap())).unwrap(),
						);
					}
				}
			}
		}
	});
}

fn main() -> anyhow::Result<()> {
	// audio event protocol
	let (audio_command_sender, audio_command_receiver) =
		crossbeam_channel::bounded::<AudioCommands>(32);

	let audio_state = Arc::new(Mutex::new(AudioState {
		command_sender: audio_command_sender,
		playback_state: AudioPlaybackState::STOPPING,
		current_file: None,
	}));

	let app_state = AppState { audio_state: audio_state };

	// tauri
	tauri::Builder::default()
		.manage(app_state.clone())
		.invoke_handler(tauri::generate_handler![
			handler::files_event_handler::get_directory_info,
			handler::audio_playback_handler::audio_play
		])
		.setup(move |app| {
			// let app_handle = app.handle();

			// let main_window = app.get_window("main").unwrap();

			// audio thread
			setup_audio_thread(app, app_state.audio_state, audio_command_receiver);

			Ok(())
		})
		.run(tauri::generate_context!())
		.expect("error while running tauri application");

	Ok(())
}
