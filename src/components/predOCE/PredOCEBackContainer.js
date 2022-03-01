import react, { useState } from 'react';
import './PredOCEBackContainer.css';
//import DashItem from '../Dashboard/DashItem';
import Card from '../UI/Card';
import PredOCEForm from './predOCEForm';
import PredOCERisks from './PredOCERisks';
const PredOCEBackContainer = () => {
	const title = 'v2';
	const [isFormHidden, getisFormHidden] = useState();
	const [isRiskHidden, getisRiskHidden] = useState('hide');

	const getRiskTab = () => {
		getisFormHidden('hide');
		getisRiskHidden();
	};
	const getFormTab = () => {
		getisFormHidden();
		getisRiskHidden('hide');
	};

	return (
		<div>
			<h2 className="headNameShowPr">{title}</h2>
			<Card className={'basicBackPr light dark ' + isFormHidden}>
				<div className="basicBackFlexCoverPr">
					<PredOCEForm onShowRisk={getRiskTab} />
				</div>
			</Card>
			<Card className={'basicBackPr light dark ' + isRiskHidden}>
				<div className="basicBackFlexCoverPr">
					<PredOCERisks onShowForm={getFormTab} />
				</div>
			</Card>
		</div>
	);
};

export default PredOCEBackContainer;
