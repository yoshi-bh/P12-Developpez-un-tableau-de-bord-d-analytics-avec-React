import { useParams, Navigate } from "react-router-dom";
import Header from "../../components/Header/index.jsx";
import SideNav from "../../components/SideNav/index.jsx";
import GraphActivity from "../../components/GraphActivity/index.jsx";
import GraphAvgSession from "../../components/GraphAvgSession/index.jsx";
import GraphPerformance from "../../components/GraphPerformance/index.jsx";
import GraphUserScore from "../../components/GraphUserScore/index.jsx";
import ValueCard from "../../components/ValueCard/index.jsx";
import IconCalories from "../../assets/calories-icon.svg";
import IconProtein from "../../assets/protein-icon.svg";
import IconCarb from "../../assets/carbs-icon.svg";
import IconFat from "../../assets/fat-icon.svg";
import GetAllApiData from "../../utilities/api/getAllApiData.js";
import GetAllMockData from "../../utilities/mock/getAllMockData.js";
import "../../styles/_variables.scss";
import "../../styles/Home.scss";

const useMock = true;

function Home() {
	const { userId } = useParams();

	const { isLoading, data, error } = useMock
		? GetAllMockData(userId)
		: GetAllApiData(userId);
	const { user, activity, averageSessions, performance } = data;

	if (error) {
		return <Navigate to="/404" />;
	}
	if (!isLoading) {
		return (
			<div className="home">
				<Header />
				<section className="main-section">
					<SideNav />
					<div className="content-container">
						<div className="content">
							<h1>
								Bonjour <span className="highlight">{user.firstName}</span>
							</h1>
							<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
							<div className="graph-container">
								<GraphActivity data={activity} />
								<GraphAvgSession data={averageSessions} />
								<GraphPerformance data={performance} />
								<GraphUserScore data={user} />
								<div className="values">
									<ValueCard
										icon={IconCalories}
										name={"Calories"}
										unit={"kCal"}
										value={user.keyData.calorieCount}
									/>
									<ValueCard
										icon={IconProtein}
										name={"Proteins"}
										unit={"g"}
										value={user.keyData.proteinCount}
									/>
									<ValueCard
										icon={IconCarb}
										name={"Glucides"}
										unit={"g"}
										value={user.keyData.carbohydrateCount}
									/>
									<ValueCard
										icon={IconFat}
										name={"Lipides"}
										unit={"g"}
										value={user.keyData.lipidCount}
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Home;
