import './PredOCEBackContainer.css';
//import DashItem from '../Dashboard/DashItem';
import Card from '../UI/Card';
import PredOCEForm from './predOCEForm';
import PredOCERisks from './PredOCERisks';
const PredOCEBackContainer = () => {
	const title = 'v2';
	return (
		<div>
			<h2 className="headNameShowPr">{title}</h2>
			<Card className="basicBackPr light hide">
				<div className="basicBackFlexCoverPr">
					<PredOCEForm />
				</div>
			</Card>
			<Card className="basicBackPr light ">
				<div className="basicBackFlexCoverPr">
					<PredOCERisks />
				</div>
			</Card>
		</div>
	);
};

export default PredOCEBackContainer;
