use std::sync::{Arc, Mutex};

use super::audio::AudioState;

#[derive(Debug, Clone)]
pub struct AppState {
	pub audio_state: Arc<Mutex<AudioState>>,
}
