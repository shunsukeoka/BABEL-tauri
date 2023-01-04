use super::{Ctx, RouterBuilder};

pub(crate) fn mount() -> RouterBuilder {
	<RouterBuilder>::new().query("getAppVersion", |t| t(|_: Ctx, _: ()| "1.0.0"))
}
