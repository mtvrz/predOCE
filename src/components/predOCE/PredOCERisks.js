import react, { useState } from 'react';
import './PredOCERisks.css';
import Risk from './Risk';

const PredOCERisks = (props) => {
	let x = 0;
	const personName = props.PersonName;
	const riskField = props.Array;
	//const [FINAL_SCRIPTS_ARRAY, get_FINAL_SCRIPTS_ARRAY] = useState('');

	const ReturnScript = (script) => {
		//get_FINAL_SCRIPTS_ARRAY(FINAL_SCRIPTS_ARRAY + script);
		props.Object.XML_Script[x] = script;
		x++;
	};
	const ShowScript = () => {
		//console.log(FINAL_SCRIPTS_ARRAY);
		console.log(props.Object);
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
						prirazka={x.prirazka}
						risk_script_add={ReturnScript}
					/>,
				])}
			</div>
			<div className="line-cont-risks"></div>
			<div className="bottom-cont-risks">
				<button className="bt flright" onClick={ShowScript}>
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
