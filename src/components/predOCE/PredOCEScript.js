import './PredOCEScript.css';

const PredOCEScript = (props) => {
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
				<button className="btScriptsubmit" onClick={props.onShowForm}>
					Předocenit nový OP
				</button>
			</div>
		</div>
	);
};

export default PredOCEScript;
