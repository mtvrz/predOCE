import './Risk.css';
const Risk = () => {
	return (
		<div className="risk-container-main">
			<div className="risk-flex">
				<div className="risk-item-container risk-item-size-one risk-item-position">
					<input type="checkbox" id="RiskCheck" name="RiskCheck" value="Risk" />
				</div>
				<div className="risk-item-container risk-item-size-two risk-item-position">bb</div>
				<div className="risk-item-container risk-item-size-one risk-item-position">bb</div>
				<div className="risk-item-container risk-item-size-two risk-item-position">bb</div>
				<div className="risk-item-container risk-item-size-one risk-item-position">bb</div>
				<div className="risk-item-container risk-item-size-one risk-item-position">bb</div>
				<div className="risk-item-container risk-item-size-three risk-item-position">bb</div>
				<div className="risk-item-container risk-item-size-one risk-item-position-txt">
					<input className="risk-textbox" type="text" id="frisk-change-val" name="frisk-change-val" />
				</div>
				<div className="risk-item-container risk-item-size-two risk-item-position">bb</div>
			</div>
		</div>
	);
};
export default Risk;
