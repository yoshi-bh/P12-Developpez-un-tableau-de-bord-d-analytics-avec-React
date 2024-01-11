export default class User {
	constructor(data) {
		this.id = data.id;
		this.firstName = data.userInfos.firstName;
		this.keyData = data.keyData;
		this.score = (data.score || data.todayScore) * 100;
	}
}
