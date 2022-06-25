use crate::{AudioPlaybackState, AudioState};

#[tauri::command]
pub fn audio_play(
	audio_event_sender: tauri::State<crossbeam_channel::Sender<AudioState>>,
	path: String,
) -> anyhow::Result<(), String> {
	let _ = audio_event_sender.send(AudioState {
		playback_state: AudioPlaybackState::LOADING,
		current_file_path: path,
	});

	Ok(())
}
