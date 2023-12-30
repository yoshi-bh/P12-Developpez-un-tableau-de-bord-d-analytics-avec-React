import { useState, useEffect } from "react";

export function useFetch(url) {
	const [data, setData] = useState({});
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		console.log(url);
		
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

	return { isLoading, data, error };
}
