use crate::db::root_directory;

use super::{Ctx, RouterBuilder};

pub(crate) fn mount() -> RouterBuilder {
	<RouterBuilder>::new()
		.query("findAll", |t| {
			t(|ctx: Ctx, _: ()| async move {
				Ok(ctx
					.db_client
					.root_directory()
					.find_many(vec![])
					.exec()
					.await?)
			})
		})
		.query("find", |t| {
			t(|ctx: Ctx, arg: i32| async move {
				let id = arg;
				Ok(ctx
					.db_client
					.root_directory()
					.find_unique(root_directory::id::equals(id))
					.exec()
					.await?)
			})
		})
		.mutation("create", |t| {
			t(|ctx: Ctx, arg: String| async move {
				let path = arg;
				Ok(ctx
					.db_client
					.root_directory()
					.create(path, vec![])
					.exec()
					.await?)
			})
		})
}
