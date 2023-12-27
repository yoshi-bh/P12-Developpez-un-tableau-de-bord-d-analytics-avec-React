import Header from "../../components/Header/";
import SideNav from "../../components/SideNav/";
import "../../styles/Home.scss";

function Home() {
	return (
		<div className="home">
			<Header />
			<section className="main-section">
				<SideNav />
				<div className="content">
					<h1>Main Content</h1>
					<p>more texte under the title</p>
					<div className="graph-container">
						<div className="graph1"></div>
						<div className="graph2"></div>
						<div className="graph3"></div>
						<div className="graph4"></div>
						<div className="values"></div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
