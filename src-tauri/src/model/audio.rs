#[derive(Debug)]
pub struct AudioState {
	pub commands_sender: crossbeam_channel::Sender<AudioStateCommands>,
}

impl AudioState {
	pub fn new(commands_sender: crossbeam_channel::Sender<AudioStateCommands>) -> Self {
		Self { commands_sender }
	}
}

#[derive(Debug)]
pub struct AudioStateCommands {
	pub playback: Option<AudioPlaybackCommands>,
	pub gui_msg_pack: Option<GuiMessagePack>,
}

#[derive(Debug)]
pub enum AudioPlaybackCommands {
	PlayAudioFile,
	StopAudioFile,
	PauseAudioFile,
}

#[derive(Debug)]
pub struct GuiMessagePack {
	pub audio_file_path: Option<String>,
}

#[derive(Debug, Clone)]
pub enum AudioPlaybackState {
	LOADING,
	PLAYING,
	PAUSING,
	STOPPING,
}
