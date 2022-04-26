import { useState } from 'react';
import './PredOCERisks.css';
import Risk from './Risk';

const PredOCERisks = (props) => {
	let x = 0;
	const personName = props.PersonName;
	const riskField = props.Array;
	const [isGenerateBtDisablet, getisGenerateBtDisablet] = useState(true);
	//const [riskField, getriskField] = useState(props.dataObject.XML);
	//	console.log(riskField);
	//const [FINAL_SCRIPTS_ARRAY, get_FINAL_SCRIPTS_ARRAY] = useState('');

	const ValidateGenerating = () => {
		getisGenerateBtDisablet(false);
	};

	const ReturnScript = (script) => {
		//get_FINAL_SCRIPTS_ARRAY(FINAL_SCRIPTS_ARRAY + script);
		props.MVS(script);
		//x++;
	};
	const ShowScript = () => {
		//console.log(FINAL_SCRIPTS_ARRAY);
		console.log(props.Object);
		props.onFillFinalScript();
		props.onShowScript();
	};
	return (
		<div className="mainContainerRisk">
			<div className="top-cont-risks">
				<h4>{personName}</h4>
			</div>
			<div className="line-cont-risks"></div>
			<div className="middle-cont-risks">
				{riskField.map((x) => [
					<Risk
						key={x.ID}
						riziko={x.riziko}
						typrizika={x.typRizika}
						pc={x.pc}
						uvek={x.uvek}
						typplneni={x.typplneni}
						risk_script_add={ReturnScript}
						generate={ValidateGenerating}
					/>,
				])}
			</div>
			<div className="line-cont-risks"></div>
			<div className="bottom-cont-risks">
				<button className="bt flright" onClick={ShowScript} disabled={isGenerateBtDisablet}>
					Generovat script
				</button>
				<button className="btback " onClick={props.onShowForm}>
					Zpět
				</button>
			</div>
		</div>
	);
};
export default PredOCERisks;
