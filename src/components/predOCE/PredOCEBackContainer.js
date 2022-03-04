import react, { useState } from 'react';
import './PredOCEBackContainer.css';
//import DashItem from '../Dashboard/DashItem';
import Card from '../UI/Card';
import PredOCEForm from './predOCEForm';
import PredOCERisks from './PredOCERisks';
import PredOCEScript from './PredOCEScript';

const PredOCEBackContainer = () => {
	const title = 'Předběžné ocenění v2';
	const [isFormHidden, getisFormHidden] = useState();
	const [isRiskHidden, getisRiskHidden] = useState('hide');
	const [isScriptHidden, getisScriptHidden] = useState('hide');
	const [NamePreevaluatePerson, getNamePreevaluatePerson] = useState();
	const getRiskTab = () => {
		getisFormHidden('hide');
		getisRiskHidden();
		getisScriptHidden('hide');
	};
	const getFormTab = () => {
		getisFormHidden();
		getisRiskHidden('hide');
		getisScriptHidden('hide');
	};
	const getScriptTab = () => {
		getisFormHidden('hide');
		getisRiskHidden('hide');
		getisScriptHidden();
	};

	const getNamePreevaluatePerson_method = (PreevaluatePersonName) => {
		getNamePreevaluatePerson(PreevaluatePersonName);
	};

	return (
		<div>
			<h2 className="headNameShowPr">{title}</h2>
			<Card className={'basicBackPr light ' + isFormHidden}>
				<div className="basicBackFlexCoverPr">
					<PredOCEForm onShowRisk={getRiskTab} getName={getNamePreevaluatePerson_method} />
				</div>
			</Card>
			<Card className={'basicBackPr light ' + isRiskHidden}>
				<div className="basicBackFlexCoverPr">
					<PredOCERisks PersonName={NamePreevaluatePerson} onShowForm={getFormTab} onShowScript={getScriptTab} />
				</div>
			</Card>
			<Card className={'basicBackPr light ' + isScriptHidden}>
				<div className="basicBackFlexCoverPr">
					<PredOCEScript onShowForm={getFormTab} />
				</div>
			</Card>
		</div>
	);
};

export default PredOCEBackContainer;
