import './PredOCEBackContainer.css';
//import DashItem from '../Dashboard/DashItem';
import Card from '../UI/Card';
import PredOCEForm from './predOCEForm';
const PredOCEBackContainer = () => {
	const title = 'v2';
	return (
		<div>
			<h2 className="headNameShowPr">{title}</h2>
			<Card className="basicBackPr">
				<div className="basicBackFlexCoverPr">
					<PredOCEForm />
				</div>
			</Card>
		</div>
	);
};

export default PredOCEBackContainer;
