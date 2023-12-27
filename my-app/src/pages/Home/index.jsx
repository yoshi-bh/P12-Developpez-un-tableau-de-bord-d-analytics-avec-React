import Logo from "../../assets/logo.png";
import Yoga from "../../assets/icon-yoga.svg";
import Swim from "../../assets/icon-swim.svg";
import Cycle from "../../assets/icon-cycle.svg";
import Gym from "../../assets/icon-gym.svg";
import "../../styles/Home.scss";

function Home() {
	return (
		<div className="home">
			<header className="header">
				<img src={Logo} alt="Logo SportSee" />
				<nav>
					<h2>Acceuil</h2>
					<h2>Profil</h2>
					<h2>Réglage</h2>
					<h2>Communauté</h2>
				</nav>
			</header>
			<section className="main-section">
				<aside className="side-nav">
					<nav>
						<img src={Yoga} alt="Yoga Icon" />
						<img src={Swim} alt="Swimming Icon" />
						<img src={Cycle} alt="Cycling Icon" />
						<img src={Gym} alt="Gym Icon" />
					</nav>
					<p>Copiryght, SportSee 2020</p>
				</aside>
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
