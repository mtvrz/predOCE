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
	const [riskField, getriskField] = useState([]);
	const [dataObject, getdataObject] = useState();
	const getRiskArray = (array) => {
		getriskField(array);
	};
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

	const Switcher = (name, actionID, xmlData, time, timePlO, rowID) => {
		getdataObject({
			ID: rowID,
			ID_action: actionID,
			Jmeno: name,
			Time: time,
			TimePO: timePlO,
			XML: xmlData,
			XML_Script: [],
		});
		getNamePreevaluatePerson(name);
		switch (actionID) {
			case '1': {
				getScriptTab();
				break;
			}
			case '2': {
				getRiskArray(xmlData);
				getRiskTab();
				// console.log(rowID, name, actionID, time, timePlO);
				// console.log(xmlData);
				//console.log(dataObject);
				break;
			}
			case '21': {
				getScriptTab();
				break;
			}
			case '22': {
				getScriptTab();
				break;
			}
		}
	};

	return (
		<div>
			<h2 className="headNameShowPr">{title}</h2>
			<Card className={'basicBackPr light ' + isFormHidden}>
				<div className="basicBackFlexCoverPr">
					<PredOCEForm onTakeAction={Switcher} />
				</div>
			</Card>
			<Card className={'basicBackPr light ' + isRiskHidden}>
				<div className="basicBackFlexCoverPr">
					<PredOCERisks
						Object={dataObject}
						PersonName={NamePreevaluatePerson}
						onShowForm={getFormTab}
						onShowScript={getScriptTab}
						Array={riskField}
					/>
				</div>
			</Card>
			<Card className={'basicBackPr light ' + isScriptHidden}>
				<div className="basicBackFlexCoverPr">
					<PredOCEScript Object={dataObject} onShowForm={getFormTab} />
				</div>
			</Card>
		</div>
	);
};

export default PredOCEBackContainer;
