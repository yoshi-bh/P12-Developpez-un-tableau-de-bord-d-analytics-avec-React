export const mockData = {
	"http://localhost:3000/user/12": {
		id: 12,
		userInfos: {
			firstName: "Katie",
			lastName: "Test",
			age: 31,
		},
		todayScore: 0.72,
		keyData: {
			calorieCount: 1730,
			proteinCount: 115,
			carbohydrateCount: 237,
			lipidCount: 45,
		},
	},
	"http://localhost:3000/user/12/activity": {
		userId: 12,
		sessions: [
			{
				day: "2020-07-01",
				kilogram: 80,
				calories: 240,
			},
			{
				day: "2020-07-02",
				kilogram: 80,
				calories: 220,
			},
			{
				day: "2020-07-03",
				kilogram: 81,
				calories: 280,
			},
			{
				day: "2020-07-04",
				kilogram: 81,
				calories: 290,
			},
			{
				day: "2020-07-05",
				kilogram: 80,
				calories: 160,
			},
			{
				day: "2020-07-06",
				kilogram: 78,
				calories: 162,
			},
			{
				day: "2020-07-07",
				kilogram: 76,
				calories: 390,
			},
		],
	},
	"http://localhost:3000/user/12/average-sessions": {
		userId: 12,
		sessions: [
			{
				day: 1,
				sessionLength: 10,
			},
			{
				day: 2,
				sessionLength: 15,
			},
			{
				day: 3,
				sessionLength: 25,
			},
			{
				day: 4,
				sessionLength: 40,
			},
			{
				day: 5,
				sessionLength: 65,
			},
			{
				day: 6,
				sessionLength: 105,
			},
			{
				day: 7,
				sessionLength: 170,
			},
		],
	},
	"http://localhost:3000/user/12/performance": {
		userId: 12,
		kind: {
			1: "cardio",
			2: "energy",
			3: "endurance",
			4: "strength",
			5: "speed",
			6: "intensity",
		},
		data: [
			{
				value: 30,
				kind: 1,
			},
			{
				value: 160,
				kind: 2,
			},
			{
				value: 50,
				kind: 3,
			},
			{
				value: 140,
				kind: 4,
			},
			{
				value: 70,
				kind: 5,
			},
			{
				value: 120,
				kind: 6,
			},
		],
	},
  "http://localhost:3000/user/18": {
    id: 18,
		userInfos: {
      firstName: "Bernard",
      lastName: "Mock",
			age: 54,
		},
		todayScore: 0.97,
		keyData: {
			calorieCount: 3546,
			proteinCount: 140,
			carbohydrateCount: 337,
			lipidCount: 145,
		},
	},
	"http://localhost:3000/user/18/activity": {
		userId: 18,
		sessions: [
			{
				day: "2020-07-01",
				kilogram: 85,
				calories: 1240,
			},
			{
				day: "2020-07-02",
				kilogram: 85,
				calories: 1220,
			},
			{
				day: "2020-07-03",
				kilogram: 85,
				calories: 1280,
			},
			{
				day: "2020-07-04",
				kilogram: 86,
				calories: 1290,
			},
			{
				day: "2020-07-05",
				kilogram: 85,
				calories: 1160,
			},
			{
				day: "2020-07-06",
				kilogram: 83,
				calories: 4162,
			},
			{
				day: "2020-07-07",
				kilogram: 86,
				calories: 1390,
			},
		],
	},
	"http://localhost:3000/user/18/average-sessions": {
		userId: 18,
		sessions: [
			{
				day: 1,
				sessionLength: 110,
			},
			{
				day: 2,
				sessionLength: 115,
			},
			{
				day: 3,
				sessionLength: 125,
			},
			{
				day: 4,
				sessionLength: 120,
			},
			{
				day: 5,
				sessionLength: 65,
			},
			{
				day: 6,
				sessionLength: 305,
			},
			{
				day: 7,
				sessionLength: 20,
			},
		],
	},
	"http://localhost:3000/user/18/performance": {
		userId: 18,
		kind: {
			1: "cardio",
			2: "energy",
			3: "endurance",
			4: "strength",
			5: "speed",
			6: "intensity",
		},
		data: [
			{
				value: 195,
				kind: 1,
			},
			{
				value: 160,
				kind: 2,
			},
			{
				value: 200,
				kind: 3,
			},
			{
				value: 70,
				kind: 4,
			},
			{
				value: 90,
				kind: 5,
			},
			{
				value: 50,
				kind: 6,
			},
		],
	},
};
