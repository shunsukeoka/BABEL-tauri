use std::sync::{Arc, Mutex};

use kira::manager::{backend::cpal::CpalBackend, AudioManager};
use thiserror::Error;

use crate::model::audio::{AudioPlaybackCommands, AudioPlaybackState, AudioStateCommands};

pub struct AudioEngine {
	manager: AudioManager,
	state: AudioPlaybackState,
	command_receiver: crossbeam_channel::Receiver<AudioStateCommands>,
}

#[derive(Debug, Error)]
pub enum AudioEngineError {
	#[error("ERROR: Could not initialized audio manager.")]
	InitializeError,
}

impl AudioEngine {
	pub fn new(
		rx: crossbeam_channel::Receiver<AudioStateCommands>,
	) -> Result<Self, AudioEngineError> {
		match AudioManager::<CpalBackend>::new(kira::manager::AudioManagerSettings::default()) {
			Ok(manager) => Ok(Self {
				manager,
				state: AudioPlaybackState::STOPPING,
				command_receiver: rx,
			}),
			Err(_) => Err(AudioEngineError::InitializeError),
		}
	}

	pub fn play_audio_file(&mut self, path: String) {
		println!("{}", path);

		match self.state {
			AudioPlaybackState::LOADING => todo!(),
			AudioPlaybackState::PLAYING => todo!(),
			AudioPlaybackState::PAUSING => todo!(),
			AudioPlaybackState::STOPPING => {
				let sound_data =
					kira_loaders::stream(path, kira_loaders::StreamingSoundSettings::default())
						.unwrap();

				self.manager.play(sound_data).unwrap();
			}
		}
	}

	pub fn pause_audio_file(&self) {
		match self.state {
			AudioPlaybackState::LOADING => todo!(),
			AudioPlaybackState::PLAYING => todo!(),
			AudioPlaybackState::PAUSING => todo!(),
			AudioPlaybackState::STOPPING => todo!(),
		}
	}

	pub fn stop_audio_file(&self) {
		match self.state {
			AudioPlaybackState::LOADING => todo!(),
			AudioPlaybackState::PLAYING => todo!(),
			AudioPlaybackState::PAUSING => todo!(),
			AudioPlaybackState::STOPPING => todo!(),
		}
	}
}

/// オーディオスレッドの初期化
pub fn setup_audio_thread(app: &mut tauri::App, engine: Arc<Mutex<AudioEngine>>) {
	std::thread::spawn(move || loop {
		let mut audio_engine = engine.lock().unwrap();

		while let Ok(command) = audio_engine.command_receiver.try_recv() {
			println!("{:?}", command);

			let msg_pack = command.gui_msg_pack.unwrap();

			match command.playback.unwrap() {
				AudioPlaybackCommands::PlayAudioFile => {
					audio_engine.play_audio_file(msg_pack.audio_file_path.unwrap())
				}
				AudioPlaybackCommands::StopAudioFile => audio_engine.stop_audio_file(),
				AudioPlaybackCommands::PauseAudioFile => audio_engine.pause_audio_file(),
			}
		}
	});
}
