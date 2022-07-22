use std::{
	rc::Rc,
	sync::{Arc, Mutex},
	time::Duration,
};

use kira::{
	manager::{backend::cpal::CpalBackend, AudioManager, MainPlaybackState},
	sound::{
		streaming::{StreamingSoundData, StreamingSoundHandle, StreamingSoundSettings},
		FromFileError,
	},
	tween::Tween,
};
use tauri::App;
use thiserror::Error;

use crate::model::audio::{AudioPlaybackCommands, AudioStateCommands};

pub struct AudioEngine {
	manager: AudioManager,
	sound_handler: Option<StreamingSoundHandle<FromFileError>>,
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
				sound_handler: None,
				command_receiver: rx,
			}),
			Err(_) => Err(AudioEngineError::InitializeError),
		}
	}

	pub fn play_audio_file(&mut self, path: String) {
		println!("{}", path);

		if self.sound_handler.is_some() {
			println!("before: {:?}", self.sound_handler.as_ref().unwrap().state());
		}

		if self.sound_handler.is_none() {
			self.sound_handler = self.play_and_create_streaming_sound_handler(path);
		} else if let Some(sound_handler) = self.sound_handler.as_mut() {
			match sound_handler.state() {
				kira::sound::static_sound::PlaybackState::Playing => {
					sound_handler
						.stop(Tween {
							duration: Duration::from_secs_f32(0.1),
							..Default::default()
						})
						.unwrap();

					self.sound_handler = self.play_and_create_streaming_sound_handler(path);
				}
				kira::sound::static_sound::PlaybackState::Pausing => todo!(),
				kira::sound::static_sound::PlaybackState::Paused => todo!(),
				kira::sound::static_sound::PlaybackState::Stopping => todo!(),
				kira::sound::static_sound::PlaybackState::Stopped => todo!(),
			}
		}

		println!("after: {:?}", self.sound_handler.as_ref().unwrap().state());
	}

	pub fn pause_audio_file(&mut self) {
		match self.manager.state() {
			MainPlaybackState::Paused => todo!(),

			MainPlaybackState::Pausing => todo!(),

			MainPlaybackState::Playing => todo!(),
		}
	}

	pub fn stop_audio_file(&mut self) {
		match self.manager.state() {
			MainPlaybackState::Paused => todo!(),

			MainPlaybackState::Pausing => todo!(),

			MainPlaybackState::Playing => todo!(),
		}
	}

	fn play_and_create_streaming_sound_handler(
		&mut self,
		path: String,
	) -> Option<StreamingSoundHandle<FromFileError>> {
		let sound_data =
			StreamingSoundData::from_file(path, StreamingSoundSettings::default()).unwrap();

		self.manager.play(sound_data).ok()
	}
}

/// オーディオスレッドの初期化
pub fn setup_audio_thread(app: &mut App, engine: Arc<Mutex<AudioEngine>>) {
	// TODO: CPU utilization goes up to around 100% when I start a thread and loop it.

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

		std::thread::park();
	});
}
