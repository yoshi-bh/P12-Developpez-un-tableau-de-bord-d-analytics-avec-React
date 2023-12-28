import {
	RadarChart,
	Radar,
	PolarAngleAxis,
	PolarRadiusAxis,
	PolarGrid,
	// Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import data from "../../data/mock-performance.json";
import "../../styles/GraphPerformance.scss";

function GraphPerformance() {
	return (
		<div className="graph-performance">
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart outerRadius={90} width={730} height={250} data={data.data.data}>
					<PolarGrid />
					<PolarAngleAxis dataKey="subject" />
					<PolarRadiusAxis angle={30} domain={[0, 150]} />
					<Radar
						name="Mike"
						dataKey="A"
						stroke="#8884d8"
						fill="#8884d8"
						fillOpacity={0.6}
					/>
					<Radar
						name="Lily"
						dataKey="B"
						stroke="#82ca9d"
						fill="#82ca9d"
						fillOpacity={0.6}
					/>
					<Legend />
				</RadarChart>
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

export default GraphPerformance;
