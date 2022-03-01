import react, { useState } from 'react';
import './PredOCERisks.css';
import Risk from './Risk';

const PredOCERisks = (props) => {
	const personName = 'Test Testovací';

	const [FINAL_SCRIPTS_ARRAY, get_FINAL_SCRIPTS_ARRAY] = useState('');
	const riskField = [
		{
			ID: 1,
			riziko: 'Z5P',
			typRizika: 'ZP',
			pc: '20000.0',
			uvek: '71',
			prirazka: '50',
		},
		{
			ID: 2,
			riziko: 'ID3N',
			typRizika: 'ZP',
			pc: '2000000.0',
			uvek: '71',
			prirazka: '300',
		},
		{
			ID: 3,
			riziko: 'DON29Z',
			typRizika: 'ZDP',
			pc: '300.0',
			uvek: '71',
			prirazka: '0',
		},
	];
	const ReturnScript = (script) => {
		get_FINAL_SCRIPTS_ARRAY(FINAL_SCRIPTS_ARRAY + script);
	};
	const ShowScript = () => {
		console.log(FINAL_SCRIPTS_ARRAY);
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
					Save
				</button>
				<button className="bt flright" onClick={props.onShowForm}>
					Discard
				</button>
			</div>
		</div>
	);
};
export default PredOCERisks;
