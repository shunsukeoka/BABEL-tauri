use crate::model::{
	app::AppState,
	audio::{AudioPlaybackCommands, AudioStateCommands, GuiMessagePack},
};

#[tauri::command]
pub fn audio_play(state: tauri::State<AppState>, path: String) -> anyhow::Result<(), String> {
	let audio_state = state.audio_state.lock().unwrap();

	audio_state.commands_sender.send(AudioStateCommands {
		playback: Some(AudioPlaybackCommands::PlayAudioFile),
		gui_msg_pack: {
			Some(GuiMessagePack {
				audio_file_path: Some(path),
			})
		},
	});

	Ok(())
}
