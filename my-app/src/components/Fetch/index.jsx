import { useState, useEffect } from "react";

const FetchApi = () => {
	const BASE_URL = "http://localhost:3000/user/12";

	// State to hold fetched data
	const [user, setUser] = useState([]);

	useEffect(() => {
		// Fetch data using Promise with the Fetch API
		const fetchUsingPromiseWithFetchApi = () => {
			fetch(BASE_URL) // Fetch data based on the current page
				.then((response) => response.json()) // Parse the response as JSON
				.then((data) => {
					setUser(data); // Set the fetched data
					console.log(data);
				})
				.catch((error) => console.error(error));
		};

		// Trigger fetching method on component mount
		fetchUsingPromiseWithFetchApi();
		console.log(user);
	});
	// }, []); // Run the effect only once on component mount

	// return (
	// <div className="container">
	//   <h1>Fetching Data in React</h1>

	//   {/* Display the fetched data */}
	//   {user.map((post) => (
	//     <div className="post" key={post.id}>
	//       <h3>{post.title}</h3>
	//       <p>{post.body}</p>
	//     </div>
	//   ))}
	// </div>
	// );
};

export default FetchApi;
