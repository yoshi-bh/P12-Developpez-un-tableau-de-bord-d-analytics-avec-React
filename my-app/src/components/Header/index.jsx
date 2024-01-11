import Logo from "../../assets/logo.png";
import "../../styles/Header.scss"

function Header() {
	return (
		<header className="header">
			<img src={Logo} alt="Logo SportSee" />
			<nav>
				<h2>Accueil</h2>
				<h2>Profil</h2>
				<h2>Réglage</h2>
				<h2>Communauté</h2>
			</nav>
		</header>
	);
}

export default Header;
