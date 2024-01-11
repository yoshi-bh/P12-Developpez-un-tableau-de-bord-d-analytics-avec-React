const textFR = {
	intensity: "Intensité",
	speed: "Vitesse",
	strength: "Force",
	endurance: "Endurance",
	energy: "Energie",
	cardio: "Cardio",
};

export default class Perfomance {
	constructor({ userId, kind, data }) {
		this.id = userId;
		this.performance = data
			.map((elem) => ({
				subject: textFR[kind[elem.kind]],
				value: elem.value,
				fullMark: 200,
			}))
			.reverse();
	}
}
