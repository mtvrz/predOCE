import './PredOCEScript.css';

const PredOCEScript = (props) => {
	const NewCase = () => {
		//console.log(props.Object);
		// props.FinalScriptV1.select();
		// document.execCommand('copy');
	};

	return (
		<div className="containerScript">
			<div className="TextField">
				<p>Zkopírováno do schránky</p>
			</div>
			<div className="Scriptflex">
				<textarea disabled className="Scripttextbox" type="text" id="fname" name="fname" value={props.FinalScriptV1} />
			</div>
			<div className="line-cont-script"></div>
			<div className="bottom-cont-script">
				<button className="btbackSC " onClick={props.onShowForm}>
					Zpět
				</button>
			</div>
		</div>
	);
};

export default PredOCEScript;
