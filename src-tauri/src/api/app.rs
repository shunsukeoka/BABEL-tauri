use super::{Ctx, RouterBuilder};

pub(crate) fn mount() -> RouterBuilder {
	<RouterBuilder>::new().query("getAppVersion", |t| t(|ctx: Ctx, _: ()| "1.0.0"))
}
