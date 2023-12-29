// import { useState, useEffect } from "react";

// export default function useFetch(url) {
// 	const [data, setData] = useState({});

// 	useEffect(() => {
// 		const fetchUsingPromiseWithFetchApi = () => {
// 			fetch(url) // Fetch data based on the current page
// 				.then((response) => response.json()) // Parse the response as JSON
// 				.then((data) => {
// 					setData(data); // Set the fetched data
// 					// console.log(data);
// 					// return data;
// 				})
// 				.catch((error) => console.error(error));
// 		};

// 		fetchUsingPromiseWithFetchApi();
// 	}, []);

// 	return data	;
// }

import { useState, useEffect } from "react";

/**
 * a react hook that allows you to fetch data
 * @param {string} url a string that should contain an URL.
 * @return {(isLoading:boolean, data:object, error:boolean|object)} 
    returns a boolean indicating if the data loading is completed or not, 
    a boolean indicating whether an error occurred during the fetching 
    and an object that contain the data.
 *
 */

export function useFetch(userId) {
	const [user, setUser] = useState({});
	const [activity, setActivity] = useState({});
	const [duration, setDuration] = useState({});
	const [performance, setPerformance] = useState({});

	const [loadingScore, setLoadingScore] = useState(0);

	// const [error, setError] = useState(false)

	useEffect(() => {
		setLoadingScore(loadingScore+1);
		const fetchData = (url, setter) => {
			fetch(url)
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					setter(data.data);
					setLoadingScore(loadingScore-1);
				})
				.catch((error) => console.error(error));
		};

		fetchData("http://localhost:3001/user/" + userId, setUser);
		fetchData(
			"http://localhost:3001/user/" + userId + "/activity",
			setActivity
		);
		fetchData(
			"http://localhost:3001/user/" + userId + "/average-sessions",
			setDuration
		);
		fetchData(
			"http://localhost:3001/user/" + userId + "/performance",
			setPerformance
		);
		// setLoading(
		// 	!user || !user.userInfos || !activity || !duration || !performance || !performance.data
		// );
	}, [userId]);

	// useEffect(() => {
	//   if (!url) return

	//   setLoading(true)

	//   async function fetchData() {
	//     try {
	//       const response = await fetch(url)
	//       if (!response.ok) {
	//         // setError(true)
	//       }

	//       const data = await response.json()

	//       setData(data.data)
	//     } catch (err) {
	//       console.log(err)

	//       setError(true)
	//     } finally {
	//       setLoading(false)
	//     }
	//   }

	//   fetchData()
	// }, [url])

	return { loadingScore, user, activity, duration, performance };
}
