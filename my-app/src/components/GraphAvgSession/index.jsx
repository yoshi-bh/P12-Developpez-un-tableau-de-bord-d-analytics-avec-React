import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	// CartesianGrid,
	Tooltip,
	// Legend,
	ResponsiveContainer,
	// ReferenceArea,
} from "recharts";
import data from "../../data/mock-average-sessions.json";
import "../../styles/GraphAvgSession.scss";

const CustomTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<div className="custom-tooltip">
				<p className="label">{payload[0].value + " min"}</p>
			</div>
		);
	}

	return null;
};

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
					<defs>
						<linearGradient id="fadeIn" x1="0%" y1="0" x2="100%" y2="0">
							<stop offset="5%" stopColor="white" stopOpacity={0.4} />
							<stop offset="95%" stopColor="white" stopOpacity={1} />
						</linearGradient>
					</defs>
					{/* <CartesianGrid strokeDasharray="3 3" /> */}
					<XAxis
						dataKey="day"
						axisLine={false}
						tickLine={false}
						tick={{ fill: "#FFFFFF", opacity: "0.5" }}
					/>
					<YAxis
						hide={true}
						dataKey="sessionLength"
						domain={["dataMin - 40", "dataMax + 40"]}
					/>
					<Tooltip cursor={false} content={<CustomTooltip />} />
					{/* <Legend /> */}
					<Line
						type="natural"
						dataKey="sessionLength"
						stroke="url(#fadeIn)"
						// fill="url("
						strokeWidth={3}
						dot={false}
					/>
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
