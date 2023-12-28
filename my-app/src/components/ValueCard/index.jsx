import "../../styles/ValueCard.scss";

function ValueCard({ icon, name, unit, value }) {
	return (
		<div className="value-card">
			<img src={icon} alt={`icon ${name}`} />
			<div className="text-container">
				<h2>{value + unit}</h2>
				<h3>{name}</h3>
			</div>
		</div>
	);
}

export default ValueCard;
