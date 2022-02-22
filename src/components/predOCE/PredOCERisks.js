import './PredOCERisks.css';
import Risk from './Risk';

const PredOCERisks = () => {
	return (
		<div className="mainContainerRisk">
			<div className="top-cont-risks"></div>
			<div className="line-cont-risks"></div>
			<div className="middle-cont-risks">
				<Risk />
				<Risk />
			</div>
			<div className="line-cont-risks"></div>
			<div className="bottom-cont-risks">
				<button className="bt flright">Save</button>
				<button className="bt flright">Discard</button>
			</div>
		</div>
	);
};
export default PredOCERisks;
