import './PredOCEScript.css';
import react, { useState } from 'react';

const PredOCEScript = (props) => {
	let scriptStart, scriptMiddle, ScriptEnd;
	const [script_final_version_1, getscript_final_version_1] = useState();
	const NewCase = () => {
		//console.log(props.Object);
		ScriptPrep();
	};
	const FillRisks = () => {
		let scr = '';
		props.Object.XML_Script.map((x) => [(scr += props.Object.XML_Script[x])]);
		return scr;
	};
	const ScriptPrep = () => {
		scriptStart = `update OCE_INTEGRATION set REQUEST_STATUS='SENT', RESPONSE_DATA='<row><ROWID>${props.Object.ID}</ROWID><Rizika>`;
		console.log(props.Object.ID_action);
		switch (props.Object.ID_action) {
			case '1': {
				break;
			}
			case '2': {
				scriptMiddle = FillRisks();
				break;
			}
			case '21': {
				break;
			}
			case '22': {
				break;
			}
		}

		console.log(scriptStart);
		console.log(scriptMiddle);
		console.log(ScriptEnd);
	};
	return (
		<div className="containerScript">
			<div className="Scriptflex">
				<textarea disabled className="Scripttextbox" type="text" id="fname" name="fname" />
			</div>
			<div className="line-cont-script"></div>
			<div className="bottom-cont-script">
				<button className="btScriptsubmit" disabled>
					Konec
				</button>
				<button className="btScriptsubmit" onClick={NewCase}>
					Předocenit nový OP
				</button>
			</div>
		</div>
	);
};

export default PredOCEScript;
