import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import data from "../../data/mock-average-sessions.json";
import "../../styles/GraphAvgSession.scss";

function GraphAvgSession() {
	return (
		<div className="graph-avg-session">
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					width={730}
					height={250}
					data={data.data.sessions}
					margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="day" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line type="monotone" dataKey="sessionLength" stroke="#FFF" strokeWidth={3} />
				</LineChart>
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

export default GraphAvgSession;
