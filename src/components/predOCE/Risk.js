import './Risk.css';
const Risk = (props) => {
	const riziko = props.riziko;
	const typrizika = props.typrizika;
	const pc = props.pc;
	const uvek = props.uvek;
	const prirazka = props.prirazka;
	return (
		<div className="risk-container-main">
			<div className="risk-flex">
				<div className="risk-item-container risk-ten-per risk-item-position">{riziko}</div>
				<div className="risk-item-container risk-five-per risk-item-position">{typrizika}</div>
				<div className="risk-item-container risk-fift-per risk-item-position">{pc}</div>
				<div className="risk-item-container risk-five-per risk-item-position">{uvek}</div>
				<div className="risk-item-container risk-ten-per risk-item-position">{prirazka} %</div>
				<div className="risk-item-container risk-twen-per risk-item-position-txt ">
					<select className="risk-textbox " name="scenario" id="scenario">
						<option value="null"></option>
						<option value="OK">Výluka - ANO</option>
						<option value="OKv">Výluka - částečná</option>
						<option value="NOK2">Přirážka</option>
						<option value="NOK8">Upravený věk</option>
						<option value="NOK8">Upravená PČ</option>
					</select>
				</div>
				<div className="risk-item-container risk-twen-per risk-item-position-txt">
					<input className="risk-textbox" type="text" id="frisk-change-val" name="frisk-change-val" />
				</div>
				<div className="risk-item-container risk-fift-per risk-item-position-txt">
					<button className="btconfirm">Confirm</button>
				</div>
			</div>
		</div>
	);
};
export default Risk;
