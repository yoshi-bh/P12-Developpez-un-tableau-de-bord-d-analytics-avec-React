import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
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

function GraphAvgSession({ data }) {
	return (
		<div className="graph-avg-session">
			<ResponsiveContainer width="100%" height="100%">
				<div className="length-title">
					<h2>Durée moyenne des sessions</h2>
				</div>
				<LineChart
					width={730}
					height={250}
					data={data.sessions}
					margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
				>
					<defs>
						<linearGradient id="fadeIn" x1="0%" y1="0" x2="100%" y2="0">
							<stop offset="5%" stopColor="white" stopOpacity={0.4} />
							<stop offset="95%" stopColor="white" stopOpacity={1} />
						</linearGradient>
					</defs>
					<XAxis
						dataKey="day"
						axisLine={false}
						tickLine={false}
						tick={{ fill: "#FFFFFF", opacity: "0.5" }}
						tickFormatter={(value, index) => {
							const days = ["L", "M", "M", "J", "V", "S", "D"];
							return days[index % 7];
						}}
					/>
					<YAxis
						hide={true}
						dataKey="sessionLength"
						domain={["dataMin - 40", "dataMax + 40"]}
					/>
					<Tooltip
						cursor={{
							strokeLinecap: "square",
							stroke: "black",
							strokeWidth: 1000,
							strokeOpacity: 0.1,
						}}
						content={<CustomTooltip />}
					/>
					<Line
						type="natural"
						dataKey="sessionLength"
						stroke="url(#fadeIn)"
						strokeWidth={3}
						dot={false}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}

export default GraphAvgSession;
