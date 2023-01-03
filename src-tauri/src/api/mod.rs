use std::sync::Arc;

mod app;

pub struct Ctx {}

pub type Router = rspc::Router<Ctx>;
pub(crate) type RouterBuilder = rspc::RouterBuilder<Ctx>;

pub(crate) fn mount() -> Arc<Router> {
	let config = rspc::Config::new().set_ts_bindings_header("/* eslint-disable */");

	let config = config.export_ts_bindings(
		std::path::PathBuf::from(env!("CARGO_MANIFEST_DIR")).join("../src/types/rspc/bindings.ts"),
	);

	<Router>::new()
		.config(config)
		.merge("app.", app::mount())
		.build()
		.arced()
}