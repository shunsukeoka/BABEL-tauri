use std::{
	borrow::BorrowMut,
	path::Path,
	sync::{Arc, Mutex},
	time::Duration,
};

use kira::{
	manager,
	sound::{
		static_sound::PlaybackState,
		streaming::{StreamingSoundData, StreamingSoundHandle, StreamingSoundSettings},
		FromFileError,
	},
	tween::Tween,
};
use serde::{Deserialize, Serialize};
use thiserror::Error;

pub trait Playback {
	fn play(&mut self, path: &Path) -> anyhow::Result<()>;
	fn pause(&mut self) -> anyhow::Result<()>;
	fn resume(&mut self) -> anyhow::Result<()>;
	fn stop(&mut self) -> anyhow::Result<()>;
	fn seek(&mut self, sec: f64) -> anyhow::Result<()>;
}

#[derive(Serialize, Deserialize)]
pub struct AudioPlaybackState {
	state: String,
	elapsed_time: f64,
}

#[derive(Debug, Error)]
pub enum AudioError {}

pub struct AudioEngine {
	pub manager: kira::manager::AudioManager,
	pub handler: Option<Mutex<StreamingSoundHandle<FromFileError>>>,
}

impl AudioEngine {
	pub fn new() -> anyhow::Result<Self> {
		let manager = manager::AudioManager::<manager::backend::cpal::CpalBackend>::new(
			manager::AudioManagerSettings::default(),
		)?;

		Ok(Self {
			manager,
			handler: None,
		})
	}

	pub fn get_playback_state(&mut self) -> anyhow::Result<Option<AudioPlaybackState>> {
		if let Some(mut handler) = self.handler.as_ref() {
			if let Ok(control) = handler.borrow_mut().lock() {
				Ok(Some(AudioPlaybackState {
					state: match control.state() {
						PlaybackState::Playing => String::from("playing"),
						PlaybackState::Pausing => String::from("pausing"),
						PlaybackState::Paused => String::from("paused"),
						PlaybackState::Stopping => String::from("stopping"),
						PlaybackState::Stopped => String::from("stopped"),
					},
					elapsed_time: control.position(),
				}))
			} else {
				Ok(None)
			}
		} else {
			Ok(None)
		}
	}

	fn set_streaming_sound(
		&self,
		path: &Path,
	) -> anyhow::Result<StreamingSoundData, FromFileError> {
		match StreamingSoundData::from_file(path, StreamingSoundSettings::default()) {
			Ok(sound) => Ok(sound),
			Err(err) => Err(err),
		}
	}
}

impl Playback for AudioEngine {
	fn play(&mut self, path: &Path) -> anyhow::Result<()> {
		if self.handler.is_some() {
			let _ = self.stop();
		}

		self.set_streaming_sound(path).map(|sound| {
			let _ = self
				.manager
				.play(sound)
				.map(|handler| self.handler = Some(Mutex::new(handler)));
		})?;

		Ok(())
	}

	fn pause(&mut self) -> anyhow::Result<()> {
		self.handler.as_ref().map(|mut handler| {
			handler.borrow_mut().lock().map(|mut control| {
				control.pause(Tween {
					start_time: kira::StartTime::Immediate,
					duration: Duration::from_secs_f64(0.01),
					..Default::default()
				})
			})
		});

		Ok(())
	}

	fn resume(&mut self) -> anyhow::Result<()> {
		self.handler.as_ref().map(|mut handler| {
			handler.borrow_mut().lock().map(|mut control| {
				control.resume(Tween {
					start_time: kira::StartTime::Immediate,
					duration: Duration::from_secs_f64(0.01),
					..Default::default()
				})
			})
		});

		Ok(())
	}

	fn stop(&mut self) -> anyhow::Result<()> {
		self.handler.as_ref().map(|mut handler| {
			handler.borrow_mut().lock().map(|mut control| {
				control.stop(Tween {
					start_time: kira::StartTime::Immediate,
					duration: Duration::from_secs_f64(0.0),
					..Default::default()
				})
			})
		});

		self.handler = None;

		Ok(())
	}

	// TODO: フロント側でsecondに変換するコストが削減できるので、seek_toをseek_by変更する
	fn seek(&mut self, sec: f64) -> anyhow::Result<()> {
		self.handler.as_ref().map(|mut handler| {
			handler
				.borrow_mut()
				.lock()
				.map(|mut control| control.seek_to(sec))
		});

		Ok(())
	}
}

#[tauri::command]
pub fn play(mut audio_engine: tauri::State<Arc<Mutex<AudioEngine>>>, path: String) {
	println!("sound file: {}", path);

	if let Ok(mut engine) = audio_engine.borrow_mut().lock() {
		let _ = engine.play(Path::new(&path));
	}
}

#[tauri::command]
pub fn pause(mut audio_engine: tauri::State<Arc<Mutex<AudioEngine>>>) {
	if let Ok(mut engine) = audio_engine.borrow_mut().lock() {
		let _ = engine.pause();
	}
}

#[tauri::command]
pub fn resume(mut audio_engine: tauri::State<Arc<Mutex<AudioEngine>>>) {
	if let Ok(mut engine) = audio_engine.borrow_mut().lock() {
		let _ = engine.resume();
	}
}

#[tauri::command]
pub fn stop(mut audio_engine: tauri::State<Arc<Mutex<AudioEngine>>>) {
	if let Ok(mut engine) = audio_engine.borrow_mut().lock() {
		let _ = engine.stop();
	}
}

#[tauri::command]
pub fn seek(mut audio_engine: tauri::State<Arc<Mutex<AudioEngine>>>, sec: f64) {
	if let Ok(mut engine) = audio_engine.borrow_mut().lock() {
		let _ = engine.seek(sec);
	}
}

#[tauri::command]
pub fn get_playback_state(
	mut audio_engine: tauri::State<Arc<Mutex<AudioEngine>>>,
) -> Option<AudioPlaybackState> {
	if let Ok(mut engine) = audio_engine.borrow_mut().lock() {
		if let Ok(state) = engine.get_playback_state() {
			state
		} else {
			None
		}
	} else {
		None
	}
}
