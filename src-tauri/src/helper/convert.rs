use chrono::offset::Utc;
use chrono::DateTime;

pub fn systemtime2string<T>(dt: T) -> String
where
	T: Into<DateTime<Utc>>,
{
	let utc = dt.into();
	return utc.format("%Y/%m/%d %T").to_string();
}
