import { useState } from 'react';
import './PredOCEBackContainer.css';
//import DashItem from '../Dashboard/DashItem';
import Card from '../UI/Card';
import PredOCEForm from './predOCEForm';
import PredOCERisks from './PredOCERisks';
import PredOCEScript from './PredOCEScript';

const PredOCEBackContainer = () => {
	let script_update_part, script_row_part, script_filled, script_row_end_part, script_update_last_part;
	const title = 'Předběžné ocenění v2';
	const [final_ScriptV1, getfinal_ScriptV1] = useState();
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
		//console.log(final_ScriptV1);
	};
	const FillRisks_into_object = () => {
		let scr = dataObject.XML_Script.join('');
		//console.log('script: ' + scr);
		return scr;
	};

	const TakeAction_dependOnScenarioTWO = () => {
		script_update_part = `update OCE_INTEGRATION set REQUEST_STATUS='SENT', RESPONSE_DATA='`;
		script_row_part = `<row><ROWID>${dataObject.ID}</ROWID><Rizika>`;
		script_filled = FillRisks_into_object();
		script_row_end_part = `</Rizika><Ostatni><StanoviskoCS>999</StanoviskoCS><ZaverecneRozhodnuti>Z5P přirážka 150%, ID1 vyloučeno, DDZ0 snížení doby na 20 let, TNP1 výluka na úrazy pánevních kostí</ZaverecneRozhodnuti><DatPrevzetiLISA>${dataObject.Time}</DatPrevzetiLISA></Ostatni></row>`;
		script_update_last_part = `', RESPONSE_STATUS='RECEIVED', RESPONSE_DATE='${dataObject.TimePO}' where id=${dataObject.ID};`;
		getfinal_ScriptV1(
			script_update_part + script_row_part + script_filled + script_row_end_part + script_update_last_part
		);
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
			XML_Script_v1_final: '',
		});
		getNamePreevaluatePerson(name);
		switch (actionID) {
			case '1': {
				script_update_part = `update OCE_INTEGRATION set REQUEST_STATUS='SENT', RESPONSE_DATA='`;
				script_row_part = `<row><ROWID>${rowID}</ROWID><Rizika/><Ostatni><StanoviskoCS>1</StanoviskoCS><ZaverecneRozhodnuti>MR - ok</ZaverecneRozhodnuti><DatPrevzetiLISA>${time}</DatPrevzetiLISA></Ostatni></row>`;
				script_update_last_part = `', RESPONSE_STATUS='RECEIVED', RESPONSE_DATE='${timePlO}' where id=${rowID};`;
				getfinal_ScriptV1(script_update_part + script_row_part + script_update_last_part);
				getScriptTab();
				break;
			}
			case '2': {
				getRiskArray(xmlData);
				getRiskTab();

				break;
			}
			case '21': {
				script_update_part = `update OCE_INTEGRATION set REQUEST_STATUS='SENT', RESPONSE_DATA='`;
				script_row_part = `<row><ROWID>${rowID}</ROWID><Rizika/><Ostatni><StanoviskoCS>2</StanoviskoCS><ZaverecneRozhodnuti>MR - odmítnuto</ZaverecneRozhodnuti><DatPrevzetiLISA>${time}</DatPrevzetiLISA></Ostatni></row>`;
				script_update_last_part = `', RESPONSE_STATUS='RECEIVED', RESPONSE_DATE='${timePlO}' where id=${rowID};`;
				getfinal_ScriptV1(script_update_part + script_row_part + script_update_last_part);
				getScriptTab();
				break;
			}
			case '22': {
				script_update_part = `update OCE_INTEGRATION set REQUEST_STATUS='SENT', RESPONSE_DATA='`;
				script_row_part = `<row><ROWID>${rowID}</ROWID><Rizika/><Ostatni><StanoviskoCS>8</StanoviskoCS><ZaverecneRozhodnuti>nelze predocenit viz. poznámka výše</ZaverecneRozhodnuti><DatPrevzetiLISA>${time}</DatPrevzetiLISA></Ostatni></row>`;
				script_update_last_part = `', RESPONSE_STATUS='RECEIVED', RESPONSE_DATE='${timePlO}' where id=${rowID};`;
				getfinal_ScriptV1(script_update_part + script_row_part + script_update_last_part);
				getScriptTab();
				break;
			}
			default: {
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
						onFillFinalScript={TakeAction_dependOnScenarioTWO}
						Array={riskField}
					/>
				</div>
			</Card>
			<Card className={'basicBackPr light ' + isScriptHidden}>
				<div className="basicBackFlexCoverPr">
					<PredOCEScript Object={dataObject} onShowForm={getFormTab} FinalScriptV1={final_ScriptV1} />
				</div>
			</Card>
		</div>
	);
};

export default PredOCEBackContainer;
