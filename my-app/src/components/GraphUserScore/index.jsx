import {
	RadialBarChart,
	RadialBar,
	// PolarAngleAxis,
	// PolarRadiusAxis,
	// PolarGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import data from "../../data/mock-user.json";
import "../../styles/GraphUserScore.scss";

function GraphUserScore() {
	return (
		<div className="graph-user-score">
			<ResponsiveContainer width="100%" height="100%">
				<RadialBarChart
					width={730}
					height={250}
					innerRadius="70%"
					outerRadius="90%"
					data={[
						{
							name: "Score",
							score: 100,
							fill: "#ffc658",
						},
						// {
						// 	name: "Score",
						// 	score: 37,
						// 	fill: "#ffc658",
						// },
						// {
						// 	name: "Score",
						// 	score: 4,
						// 	fill: "#ffc658",
						// },
						{
							name: "Score",
							score: data.data.todayScore * 100,
							fill: "#FF0000",
						},
					]}
					startAngle={225}
					endAngle={-225}
				>
					<RadialBar
						minAngle={15}
						label={{ fill: "#666", position: "outsideStart" }}
						background
						clockWise={true}
						dataKey="score"
					/>
					<Legend
						iconSize={10}
						width={120}
						height={140}
						layout="vertical"
						verticalAlign="middle"
						align="right"
					/>
					<Tooltip />
				</RadialBarChart>
				{/* <BarChart width={150} height={100} data={data.data.sessions}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="day" />
					<YAxis
						yAxisId="kilogram"
						dataKey="kilogram"
						orientation="right"
						domain={["dataMin - 5", "dataMax + 5"]}
					/>
					<YAxis
						hide={true}
						yAxisId="calories"
						dataKey="calories"
						orientation="right"
						domain={["dataMin - 100", "dataMax + 100"]}
					/>
					<Tooltip />
					<Legend
						align="right"
						verticalAlign="top"
						iconType="circle"
						name="calories"
						unit="kCal"
					/>
					<Bar
						name="Poids (kg)"
						unit="kg"
						dataKey="kilogram"
						fill="#282D30"
						barSize={10}
						yAxisId="kilogram"
					/>
					<Bar
						name="Calories brûlées (kCal)"
						unit="kCal"
						dataKey="calories"
						fill="#E60000"
						barSize={10}
						yAxisId="calories"
					/>
				</BarChart> */}
			</ResponsiveContainer>
		</div>
	);
}

export default GraphUserScore;
