import './PredOCEScript.css';
import react, { useState } from 'react';

const PredOCEScript = (props) => {
	const [script_final_version_1, getscript_final_version_1] = useState(props.FinalScriptV1);
	const NewCase = () => {
		//console.log(props.Object);
	};

	return (
		<div className="containerScript">
			<div className="Scriptflex">
				<textarea
					disabled
					className="Scripttextbox"
					type="text"
					id="fname"
					name="fname"
					value={script_final_version_1}
				/>
			</div>
			<div className="line-cont-script"></div>
			<div className="bottom-cont-script">
				<button className="btScriptsubmit" disabled>
					Konec
				</button>
				<button className="btScriptsubmit" onClick={NewCase} disabled>
					Předocenit nový OP
				</button>
			</div>
		</div>
	);
};

export default PredOCEScript;
