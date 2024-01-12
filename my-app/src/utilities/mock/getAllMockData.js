import User from "../../models/user.js";
import Activity from "../../models/activity.js";
import AverageSessions from "../../models/average-sessions.js";
import Perfomance from "../../models/performance.js";
import { mockData } from "./mockData.js";

function GetAllData(userId) {
	console.log("MOCK!");
	const user = mockData["http://localhost:3000/user/" + userId];
	const activity =
		mockData["http://localhost:3000/user/" + userId + "/activity"];
	const averageSessions =
		mockData["http://localhost:3000/user/" + userId + "/average-sessions"];
	const performance =
		mockData["http://localhost:3000/user/" + userId + "/performance"];

	// const {
	// 	isLoading: usrLoading,
	// 	data: usr,
	// 	error: usrError,
	// } = useFetch("http://localhost:3000/user/" + userId);
	// const {
	// 	isLoading: actLoading,
	// 	data: act,
	// 	error: actError,
	// } = useFetch("http://localhost:3000/user/" + userId + "/activity");
	// const {
	// 	isLoading: avgLoading,
	// 	data: avg,
	// 	error: avgError,
	// } = useFetch("http://localhost:3000/user/" + userId + "/average-sessions");
	// const {
	// 	isLoading: prfLoading,
	// 	data: prf,
	// 	error: prfError,
	// } = useFetch("http://localhost:3000/user/" + userId + "/performance");

	// const error = usrError || actError || avgError || prfError;

	if (
		user === undefined ||
		activity === undefined ||
		averageSessions === undefined ||
		performance === undefined
	)
		return { isLoading: false, data: {}, error: true };

	// const user = new User(usr);
	// const activity = new Activity(act);
	// averageSessions = new AverageSessions(avg);
	// performance = new Perfomance(prf);

	const data = {
		user: new User(user),
		activity: new Activity(activity),
		averageSessions: new AverageSessions(averageSessions),
		performance: new Perfomance(performance),
	};
	return { isLoading: false, data, error: false };
}

export default GetAllData;
