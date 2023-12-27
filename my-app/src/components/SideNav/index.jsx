import Yoga from "../../assets/icon-yoga.svg";
import Swim from "../../assets/icon-swim.svg";
import Cycle from "../../assets/icon-cycle.svg";
import Gym from "../../assets/icon-gym.svg";
import "../../styles/SideNav.scss";

function SideNav() {
	return (
		<aside className="side-nav">
			<nav>
				<img src={Yoga} alt="Yoga Icon" />
				<img src={Swim} alt="Swimming Icon" />
				<img src={Cycle} alt="Cycling Icon" />
				<img src={Gym} alt="Gym Icon" />
			</nav>
			<p>Copiryght, SportSee 2020</p>
		</aside>
	);
}
export default SideNav;
