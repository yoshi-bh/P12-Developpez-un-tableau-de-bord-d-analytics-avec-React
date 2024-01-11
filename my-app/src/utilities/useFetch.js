import { useState, useEffect } from "react";
import { mockData } from "./mockData.js";

const withAPI = true;

export function useFetch(url) {
	const [data, setData] = useState({});
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (!url) return;

		setLoading(true);
		const fetchData = () => {
			fetch(url)
				.then((response) => {
					if (!response.ok) {
						setError(true);
					}

					return response.json();
				})
				.then((data) => {
					setData(data.data);
					setLoading(false);
				})
				.catch((error) => {
					setError(true);
					console.error(error);
				});
		};

		fetchData();
	}, [url]);

	if (withAPI) {
		return { isLoading, data, error };
	} else {
		return { isLodaing: false, data: mockData[url], error: false };
	}
}
