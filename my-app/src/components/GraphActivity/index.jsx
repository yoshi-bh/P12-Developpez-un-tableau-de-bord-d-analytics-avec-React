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

function GraphActivity() {
	return (
		<div className="graph-activity">
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					width={150}
					height={100}
					data={data.data.sessions}
					barGap={"1%"}
					barCategoryGap={"1%"}
					margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
				>
					<CartesianGrid strokeDasharray="3 3" vertical={false} />
					<XAxis dataKey="day" tickLine={false} />
					<YAxis
						axisLine={false}
						tickLine={false}
						yAxisId="kilogram"
						dataKey="kilogram"
						orientation="right"
						domain={["dataMin - 2", "dataMax + 5"]}
					/>
					<YAxis
						hide={true}
						yAxisId="calories"
						dataKey="calories"
						orientation="right"
						domain={[0, "dataMax + 10"]}
					/>
					<Tooltip />
					<Legend
						align="right"
						verticalAlign="top"
						iconType="circle"
						name="calories"
						unit="kCal"
						// margin={{ top: 0, left: 0, right: 0, bottom: 100 }}
					/>
					<Bar
						name="Poids (kg)"
						unit="kg"
						dataKey="kilogram"
						fill="#282D30"
						maxBarSize={10}
						radius={[20, 20, 0, 0]}
						yAxisId="kilogram"
					/>
					<Bar
						name="Calories brûlées (kCal)"
						unit="kCal"
						dataKey="calories"
						fill="#E60000"
						maxBarSize={10}
						radius={[20, 20, 0, 0]}
						yAxisId="calories"
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}

export default GraphActivity;
