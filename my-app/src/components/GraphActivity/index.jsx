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
				<BarChart width={150} height={100} data={data.data.sessions}>
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
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}

export default GraphActivity;
