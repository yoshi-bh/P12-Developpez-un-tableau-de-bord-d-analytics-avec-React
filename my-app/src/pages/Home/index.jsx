import Header from "../../components/Header/";
import SideNav from "../../components/SideNav/";
import GraphActivity from "../../components/GraphActivity";
import GraphAvgSession from "../../components/GraphAvgSession";
import GraphPerformance from "../../components/GraphPerformance";
import GraphUserScore from "../../components/GraphUserScore";
import ValueCard from "../../components/ValueCard";
import IconCalories from "../../assets/calories-icon.svg";
import IconProtein from "../../assets/protein-icon.svg";
import IconCarb from "../../assets/carbs-icon.svg";
import IconFat from "../../assets/fat-icon.svg";
import data from "../../data/mock-user.json";
import "../../styles/_variables.scss";
import "../../styles/Home.scss";

function Home() {
	return (
		<div className="home">
			<Header />
			<section className="main-section">
				<SideNav />
				<div className="content">
					<h1>
						Bonjour{" "}
						<span className="highlight">{data.data.userInfos.firstName}</span>
					</h1>
					<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
					<div className="graph-container">
						<GraphActivity />
						<GraphAvgSession />
						<GraphPerformance />
						<GraphUserScore />
						<div className="values">
							<ValueCard
								icon={IconCalories}
								name={"Calories"}
								unit={"kCal"}
								value={data.data.keyData.calorieCount}
							/>
							<ValueCard
								icon={IconProtein}
								name={"Proteins"}
								unit={"g"}
								value={data.data.keyData.proteinCount}
							/>
							<ValueCard
								icon={IconCarb}
								name={"Glucides"}
								unit={"g"}
								value={data.data.keyData.carbohydrateCount}
							/>
							<ValueCard
								icon={IconFat}
								name={"Lipides"}
								unit={"g"}
								value={data.data.keyData.lipidCount}
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
