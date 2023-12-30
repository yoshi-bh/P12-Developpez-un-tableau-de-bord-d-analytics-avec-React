import React from "react";
import ReactDOM from "react-dom/client";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Home from "./pages/Home/";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/user/:userId" element={<Home />} />
				<Route path="*" element={<Navigate to="/user/12" />} />
			</Routes>
		</Router>
	</React.StrictMode>
);
