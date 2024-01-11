export default class Average {
	constructor({ userId, sessions }) {
		this.id = userId;
		this.sessions = sessions.map((session) => ({
			sessionLength: session.sessionLength,
		}));
	}
}
