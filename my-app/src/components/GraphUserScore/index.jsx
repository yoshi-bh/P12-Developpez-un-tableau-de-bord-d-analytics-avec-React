import {
	RadialBarChart,
	RadialBar,
	ResponsiveContainer,
	PolarAngleAxis,
} from "recharts";
import "../../styles/GraphUserScore.scss";

function GraphUserScore(data) {
	return (
		<div className="graph-user-score">
			<ResponsiveContainer width="100%" height="100%">
				<div className="title">
					<h2>Score</h2>
				</div>
				<RadialBarChart
					width={730}
					height={250}
					innerRadius="75%"
					outerRadius="90%"
					data={[
						{
							name: "Score",
							score: data.data * 100,
							fill: "#FF0000",
						},
					]}
					startAngle={90}
					endAngle={450}
				>
					<PolarAngleAxis
						type="number"
						domain={[0, 100]}
						angleAxisId={0}
						tick={false}
					/>
					<RadialBar
						background={{ fill: "#FBFBFB" }}
						cornerRadius={20}
						minAngle={15}
						clockWise={true}
						dataKey="score"
					/>
				</RadialBarChart>
				<div className="text-centered">
					<h2>{data.data * 100 + "%"}</h2>
					<p>de votre objectif</p>
				</div>
			</ResponsiveContainer>
		</div>
	);
}

export default GraphUserScore;
