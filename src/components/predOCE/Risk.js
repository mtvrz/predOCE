import react, { useState } from 'react';
import './Risk.css';

const Risk = (props) => {
	const riziko = props.riziko;
	const typrizika = props.typrizika;
	const pc = props.pc;
	const uvek = props.uvek;
	const prirazka = props.prirazka;

	const [isSelectDisabled, setIsSelectDisabled] = useState(false);
	const [isBtDisabled, setIsBtDisabled] = useState(false);
	const [isTXTDisabled, setIsTXTDisabled] = useState(true);
	const [selectChange, setSelectChange] = useState('null');
	const [txtValue, setTXTValue] = useState('');
	const SelectStateUpdate = (event) => {
		setSelectChange(event.target.value);
		if (event.target.value === 'null' || event.target.value === 'VyA' || event.target.value === 'VyC')
			setIsTXTDisabled(true);
		else setIsTXTDisabled(false);
		//console.clear();
	};
	const setTxt = (event) => {
		setTXTValue(event.target.value);
	};
	const returnState = () => {
		const obj = {
			riziko: { riziko },
			select: { selectChange },
			ChangeValue: { txtValue },
		};
		console.log(obj);
		setIsSelectDisabled(true);
		setIsTXTDisabled(true);
		setIsBtDisabled(true);
	};

	return (
		<div className="risk-container-main">
			<div className="risk-flex">
				<div className="risk-item-container risk-ten-per risk-item-position">{riziko}</div>
				<div className="risk-item-container risk-five-per risk-item-position">{typrizika}</div>
				<div className="risk-item-container risk-fift-per risk-item-position">{pc}</div>
				<div className="risk-item-container risk-five-per risk-item-position">{uvek}</div>
				<div className="risk-item-container risk-ten-per risk-item-position">{prirazka} %</div>
				<div className="risk-item-container risk-twen-per risk-item-position-txt ">
					<select
						className="risk-textbox "
						name="scenario"
						id="scenario"
						defaultValue={selectChange}
						onChange={SelectStateUpdate}
						disabled={isSelectDisabled}
					>
						<option value="null"></option>
						<option value="VyA">Výluka - ANO</option>
						<option value="VyC">Výluka - částečná</option>
						<option value="Pri">Přirážka</option>
						<option value="UpV">Upravený věk</option>
						<option value="UpC">Upravená PČ</option>
					</select>
				</div>
				<div className="risk-item-container risk-twen-per risk-item-position-txt">
					<input
						className="risk-textbox"
						type="text"
						id="frisk-change-val"
						name="frisk-change-val"
						disabled={isTXTDisabled}
						value={txtValue}
						onChange={setTxt}
					/>
				</div>
				<div className="risk-item-container risk-fift-per risk-item-position-txt">
					<button className="btconfirm" onClick={returnState} disabled={isBtDisabled}>
						Confirm
					</button>
				</div>
			</div>
		</div>
	);
};
export default Risk;
