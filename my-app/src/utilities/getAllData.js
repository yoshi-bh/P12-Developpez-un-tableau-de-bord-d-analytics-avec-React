import { useFetch } from "./useFetch.js";
import User from "../models/user.js";
import Activity from "../models/activity.js";
import AverageSessions from "../models/average-sessions.js";
import Perfomance from "../models/performance.js";

function GetAllData(userId) {
	let user, activity, averageSessions, performance;

	const {
		isLoading: usrLoading,
		data: usr,
		error: usrError,
	} = useFetch("http://localhost:3000/user/" + userId);
	const {
		isLoading: actLoading,
		data: act,
		error: actError,
	} = useFetch("http://localhost:3000/user/" + userId + "/activity");
	const {
		isLoading: avgLoading,
		data: avg,
		error: avgError,
	} = useFetch("http://localhost:3000/user/" + userId + "/average-sessions");
	const {
		isLoading: prfLoading,
		data: prf,
		error: prfError,
	} = useFetch("http://localhost:3000/user/" + userId + "/performance");

	if (!usrLoading) {
		user = new User(usr);
	}
	if (!actLoading) {
		activity = new Activity(act);
	}
	if (!avgLoading) {
		averageSessions = new AverageSessions(avg);
	}
	if (!prfLoading) {
		performance = new Perfomance(prf);
	}

	const isLoading = usrLoading || actLoading || avgLoading || prfLoading;
	const error = usrError || actError || avgError || prfError;
	const data = {
		user,
		activity,
		averageSessions,
		performance,
	};
	return { isLoading, data, error };
}

export default GetAllData;
