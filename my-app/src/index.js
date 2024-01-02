import React from "react";
import ReactDOM from "react-dom/client";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages/Home/";
import Error404 from "./pages/Error404";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/user/:userId" element={<Home />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</Router>
	</React.StrictMode>
);
