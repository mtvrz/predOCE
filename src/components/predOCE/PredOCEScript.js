import './PredOCEScript.css';

const PredOCEScript = (props) => {
	const NewCase = () => {
		//console.log(props.Object);
	};

	return (
		<div className="containerScript">
			<div className="Scriptflex">
				<textarea disabled className="Scripttextbox" type="text" id="fname" name="fname" value={props.FinalScriptV1} />
			</div>
			<div className="line-cont-script"></div>
			<div className="bottom-cont-script">
				<button className="btScriptsubmit" disabled>
					Konec
				</button>
				<button className="btScriptsubmit" onClick={NewCase} disabled>
					Předocenit nový OP
				</button>
				<button className="btbackSC " onClick={props.onShowForm}>
					Zpět
				</button>
			</div>
		</div>
	);
};

export default PredOCEScript;
