import {
	RadarChart,
	Radar,
	PolarAngleAxis,
	PolarRadiusAxis,
	PolarGrid,
	ResponsiveContainer,
} from "recharts";
import "../../styles/GraphPerformance.scss";

function GraphPerformance({ data }) {
	return (
		<div className="graph-performance">
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart
					outerRadius={90}
					width={730}
					height={250}
					data={data.performance}
				>
					<PolarGrid radialLines={false} stroke="#FFF" />
					<PolarAngleAxis
						dataKey="subject"
						stroke="#FFF"
						tickLine={false}
						fontSize={"0.75rem"}
					/>
					<PolarRadiusAxis
						tick={false}
						axisLine={false}
						angle={30}
						domain={[0, 150]}
					/>
					<Radar name="User" dataKey="value" fill="#FF0101" fillOpacity={0.6} />
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
}

export default GraphPerformance;
