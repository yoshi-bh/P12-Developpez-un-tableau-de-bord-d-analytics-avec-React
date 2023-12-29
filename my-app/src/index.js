import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import Fetch from "./components/Fetch/";
import Home from "./pages/Home/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Fetch />
		<Home />
	</React.StrictMode>
);
