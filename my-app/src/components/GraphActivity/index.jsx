import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import data from "../../data/mock-activity.json";
import "../../styles/GraphActivity.scss";

const CustomTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<div className="custom-tooltip">
				<p className="label">{payload[0].value + payload[0].unit}</p>
				<p className="label">{payload[1].value + payload[1].unit}</p>
			</div>
		);
	}

	return null;
};

function GraphActivity() {
	return (
		<div className="graph-activity">
			<ResponsiveContainer width="100%" height="100%">
				<div className="activity-title">
					<h2>Activité quotidienne</h2>
				</div>
				<BarChart
					width={150}
					height={100}
					data={data.data.sessions}
					barGap={15}
					margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
				>
					<CartesianGrid strokeDasharray="3 3" vertical={false} />
					<XAxis
						dataKey="day"
						tickLine={false}
						// scale={"point"}
						padding={{ left: -20, right: -20 }}
						tick={{ fill: "#9B9EAC" }}
						tickFormatter={(value, index) => {
							return +value.split("-")[2];
						}}
						tickMargin={15}
					/>
					<YAxis
						axisLine={false}
						tickLine={false}
						yAxisId="kilogram"
						dataKey="kilogram"
						orientation="right"
						tick={{ fill: "#9B9EAC" }}
						tickMargin={15}
						domain={["dataMin - 2", "dataMax + 5"]}
					/>
					<YAxis
						hide={true}
						yAxisId="calories"
						dataKey="calories"
						orientation="right"
						domain={[0, "dataMax + 10"]}
					/>
					<Tooltip content={<CustomTooltip />} />
					<Legend
						align="right"
						verticalAlign="top"
						iconType="circle"
						iconSize={10}
						name="calories"
						unit="kCal"
					/>
					<Bar
						name="Poids (kg)"
						unit="kg"
						dataKey="kilogram"
						fill="#282D30"
						// maxBarSize={10}
						barSize={10}
						radius={[20, 20, 0, 0]}
						yAxisId="kilogram"
					/>
					<Bar
						name="Calories brûlées (kCal)"
						unit="kCal"
						dataKey="calories"
						fill="#E60000"
						// maxBarSize={10}
						barSize={10}
						radius={[20, 20, 0, 0]}
						yAxisId="calories"
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}

export default GraphActivity;
