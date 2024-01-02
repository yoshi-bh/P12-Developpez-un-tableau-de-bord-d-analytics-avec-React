import { NavLink } from "react-router-dom";
import Header from "../../components/Header/index.jsx";
import SideNav from "../../components/SideNav/index.jsx";
import "../../styles/_variables.scss";
import "../../styles/Error404.scss";

function Error404() {
	return (
		<div className="error">
			<Header />
			<section className="main-section">
				<SideNav />
				<div className="content">
					<h1>404</h1>
					<h2>Page not found!</h2>
					<p>
						Feel free to check <NavLink to="/user/12">Karl's profile</NavLink>
					</p>
				</div>
			</section>
		</div>
	);
}

export default Error404;
