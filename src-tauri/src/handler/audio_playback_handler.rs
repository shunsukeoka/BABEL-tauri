use crate::{AppState, AudioCommands};

#[tauri::command]
pub fn audio_play(state: tauri::State<AppState>, path: String) -> anyhow::Result<(), String> {
	let mut audio_state = state.audio_state.lock().unwrap();

	audio_state.current_file = Some(std::fs::File::open(path).unwrap());

	let _ = audio_state
		.command_sender
		.send(AudioCommands::PlayAudioFile);

	Ok(())
}
