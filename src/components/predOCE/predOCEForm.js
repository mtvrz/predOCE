import { useState } from 'react';
import './PredOCEForm.css';

const PredOCEForm = (props) => {
	let PreevaluatePersonName = '';
	let i = true;
	let isValis = false;
	let timestamp = '',
		timestampPlOne = '';
	let rowid;
	let obj = [];
	const [dataXML, getdataXML] = useState();
	const [action, getaction] = useState('0');
	const [infoMessage, getinfoMessage] = useState('');
	const [timeset, gettimeset] = useState('');
	const [isEn, getisEn] = useState(false);
	const [errONE, geterrONE] = useState('');
	const [errTWO, geterrTWO] = useState('');
	const [errTHREE, geterrTHREE] = useState('');
	let errmess1, errmess2, errmess3;
	const RiskListFill = (xml) => {
		let x = 1;
		while (i === true) {
			try {
				obj[x] = {
					ID: x,
					riziko: xml.getElementsByTagName('VerzeRizika')[x - 1].childNodes[0].nodeValue,
					typRizika: xml.getElementsByTagName('TypRizika')[x - 1].childNodes[0].nodeValue,
					typplneni: xml.getElementsByTagName('TypPlneni')[x - 1].childNodes[0].nodeValue,
					pc: xml.getElementsByTagName('PC')[x - 1].childNodes[0].nodeValue,
					uvek: xml.getElementsByTagName('O_VEK')[x - 1].childNodes[0].nodeValue,
					prirazka: 0,
				};
				x++;
			} catch (error) {
				console.warn('Risks_Loaded');
				i = false;
			}
		}
		//console.log(obj);
		//props.getArray(obj);
	};
	const EditTimestampPlOne = () => {
		timestampPlOne = timestamp;
		let min = parseInt(timestamp[14] + timestamp[15]);
		let hour = parseInt(timestamp[11] + timestamp[12]);

		min++;
		if (min === 60) {
			min = 0;
			hour++;
		}
		if (hour === 24) {
			hour = 0;
		}

		if (min < 10) {
			min = '0' + min;
		}
		if (hour < 10) {
			hour = '0' + hour;
		}
		timestampPlOne = timestampPlOne.substr(0, 11) + hour + ':' + min + timestampPlOne.substr(16);
		//console.log(min, hour, timestampPlOne);
	};
	const EditTimestamp = () => {
		try {
			timestamp = timeset;
			//timestamp = timeset;
			//console.log(timestamp, timeset);
			timestamp = timestamp.replace(' ', 'T');
			EditTimestampPlOne();
		} catch (error) {
			console.error('InvalidTime');
		}
	};
	const ConvertXML = () => {
		if (i === true) {
			let parser = new DOMParser();
			let xmldoc = parser.parseFromString(dataXML, 'text/xml');
			PreevaluatePersonName = xmldoc.getElementsByTagName('Jmeno')[0].childNodes[0].nodeValue;
			PreevaluatePersonName += ' ' + xmldoc.getElementsByTagName('Prijmeni')[0].childNodes[0].nodeValue;
			rowid = xmldoc.getElementsByTagName('ROWID')[0].childNodes[0].nodeValue;
			RiskListFill(xmldoc);
		}
	};
	//onClick metoda
	const ChangeTimestamp = (event) => {
		gettimeset(event.target.value);
	};
	//onClick metoda
	const ChangeDataXML = (event) => {
		let val = event.target.value;
		val = val.replaceAll('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>', '');
		val = val.replaceAll(' ', '');

		getdataXML(val);
	};
	//onClick metoda
	const ChangeAction = (event) => {
		getaction(event.target.value);
	};

	const SubmitButtonClickEvent = () => {
		// if (dataXML != null) {
		// 	//console.clear();
		// 	ConvertXML();
		// 	EditTimestamp();
		// }
		// if (action !== '0') {
		// 	getisEn(true);
		// 	props.onTakeAction(PreevaluatePersonName, action, obj, timestamp, timestampPlOne, rowid);
		// } else getinfoMessage('Není zadaný scénář');
	};

	const ErrorDefine = (index, isError) => {
		// dataXML != null && dataXML !== '' ? geterrONE('') : geterrONE('errorS');
		// timeset !== '' ? geterrTWO('') : geterrTWO('errorS');
		// action !== '0' ? geterrTHREE('') : geterrTHREE('errorS');

		if (index === 1 && isError === true) {
			geterrONE('errorS');
			errmess1 = 'XML datový soubor není validní';
		}
		if (index === 1 && isError === false) {
			geterrONE('');
			errmess1 = '';
		}
		if (index === 2 && isError === true) {
			geterrTWO('errorS');
			errmess2 = 'Časový údaj není ve validním stavu';
		}
		if (index === 2 && isError === false) {
			geterrTWO('');
			errmess2 = '';
		}
		if (index === 2 && isError === true) {
			geterrTHREE('errorS');
			errmess3 = 'Časový údaj není ve validním stavu';
		}
		if (index === 2 && isError === false) {
			geterrTHREE('');
			errmess3 = 'Zvolte scénář';
		}
		getinfoMessage(errmess1 + ' | ' + errmess2 + ' | ' + errmess3);
	};

	return (
		<div className="container">
			<div className="flex">
				<label className="textName lft">Request_DATA:</label>
				<label className="textName lft">Request_DATE:</label>
				<label className="textName lft">Scénář</label>
				<div className="inputContainer lft">
					<textarea
						className={'textboxShow ' + errONE}
						type="text"
						id="fdata"
						name="fdata"
						onChange={ChangeDataXML}
						disabled={isEn}
					/>
				</div>
				<div className="inputContainer lft ">
					<input
						className={'textboxShow ' + errTWO}
						type="text"
						id="date"
						name="date"
						onChange={ChangeTimestamp}
						value={timeset}
						disabled={isEn}
						autoComplete="off"
					/>
				</div>
				<div className="inputContainer lft">
					<select className={'textboxShow ' + errTHREE} name="scenario" id="scenario" onChange={ChangeAction}>
						<option value="0"></option>
						<option value="1">Předocenění - OK </option>
						<option value="2">Předocenění - OK s výlukou </option>
						<option value="21">Předocenění - NOK 2 </option>
						<option value="22">Předocenění - NOK 8 </option>
					</select>
				</div>
				<div className="infoPar lft ">
					<p>{infoMessage}</p>
				</div>
			</div>
			<div className="line"></div>
			<div className="btcontainer">
				<button className="btsubmit" onClick={SubmitButtonClickEvent}>
					Potvrdit
				</button>
			</div>
		</div>
	);
};
export default PredOCEForm;
