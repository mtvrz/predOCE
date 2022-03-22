import react, { useState } from 'react';
import './PredOCEForm.css';

const PredOCEForm = (props) => {
	let PreevaluatePersonName = '';
	let xmldataDef =
		'<row><ROWID>1301</ROWID><Smlouva><IDContract>302995</IDContract><IDContractFull>0121000003732432</IDContractFull><DatumUzavreni>2022-02-02+01:00</DatumUzavreni><DatumPocatku>2022-02-10+01:00</DatumPocatku><Produkt>10560</Produkt><PojistnaDoba>37</PojistnaDoba><Frekvence>3</Frekvence><AgeSpravy>632</AgeSpravy><AgeSjednani>632</AgeSjednani><Ziskatel>8670</Ziskatel><ZiskatelJmeno>.Allrisk,a.s.</ZiskatelJmeno><ZiskatelMail>mail76@IDD.cz</ZiskatelMail><Dat_Vlozeni_KDP>2022-02-02T13:05:00.425+01:00</Dat_Vlozeni_KDP></Smlouva><Pojisteny><Index>1</Index><Jmeno>Josef</Jmeno><Prijmeni>Zamítnutý</Prijmeni><RC>8901011010</RC><Povolani>aranžér</Povolani><VstupniVek>34</VstupniVek><Zadost_o_LP>false</Zadost_o_LP></Pojisteny><Rizika><Riziko><TypRizika>ZP</TypRizika><VerzeRizika>Z5P</VerzeRizika><TypPlneni>PC</TypPlneni><PC>20000.0</PC><PCMax>500.0</PCMax><O_VEK>71</O_VEK></Riziko><Riziko><TypRizika>ZP</TypRizika><VerzeRizika>Z5Z</VerzeRizika><TypPlneni>PCdecr</TypPlneni><PC>2500000.0</PC><PCMax>500.0</PCMax><O_VEK>71</O_VEK></Riziko><Riziko><TypRizika>ZP</TypRizika><VerzeRizika>ID3N</VerzeRizika><TypPlneni>PC</TypPlneni><PC>500000.0</PC><PCMax>500.0</PCMax><O_VEK>65</O_VEK></Riziko><Riziko><TypRizika>ZP</TypRizika><VerzeRizika>ID1N</VerzeRizika><TypPlneni>PCdecr</TypPlneni><PC>1800000.0</PC><PCMax>500.0</PCMax><O_VEK>65</O_VEK></Riziko><Riziko><TypRizika>UP</TypRizika><VerzeRizika>DOU8</VerzeRizika><TypPlneni>PC</TypPlneni><PC>500.0</PC><PCMax>500.0</PCMax><O_VEK>71</O_VEK></Riziko><Riziko><TypRizika>ZDP</TypRizika><VerzeRizika>DON29Z</VerzeRizika><TypPlneni>PC</TypPlneni><PC>300.0</PC><PCMax>500.0</PCMax><O_VEK>65</O_VEK></Riziko><Riziko><TypRizika>ZDP</TypRizika><VerzeRizika>DOHP</VerzeRizika><TypPlneni>PC</TypPlneni><PC>500.0</PC><PCMax>500.0</PCMax><O_VEK>71</O_VEK></Riziko></Rizika></row>';
	let timestamp = '',
		timestampPlOne = '';
	let rowid;
	let obj = [];
	const [dataXML, getdataXML] = useState();
	const [action, getaction] = useState('0');
	const [infoMessage, getinfoMessage] = useState();
	const [timeset, gettimeset] = useState('');
	const [timeONEset, gettimeONEset] = useState();
	const RiskListFill = (xml) => {
		let i = true;
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
			//console.log(timestamp, timeset);
			timestamp = timestamp.replace(' ', 'T');
			EditTimestampPlOne();
		} catch (error) {
			console.error('InvalidTime');
		}
	};
	const ConvertXML = () => {
		let parser = new DOMParser();
		let xmldoc = parser.parseFromString(xmldataDef, 'text/xml');
		PreevaluatePersonName = xmldoc.getElementsByTagName('Jmeno')[0].childNodes[0].nodeValue;
		PreevaluatePersonName += ' ' + xmldoc.getElementsByTagName('Prijmeni')[0].childNodes[0].nodeValue;
		rowid = xmldoc.getElementsByTagName('ROWID')[0].childNodes[0].nodeValue;
		RiskListFill(xmldoc);
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
		console.clear();
		ConvertXML();
		//console.log(timestamp, timestampPlOne);
		EditTimestamp();
		//console.log(timestamp, timestampPlOne);
		//console.log(action);
		if (action != '0') {
			props.onTakeAction(PreevaluatePersonName, action, obj, timestamp, timestampPlOne, rowid);
		} else getinfoMessage('Není zadaný scénář');
	};

	return (
		<div className="container">
			<div className="flex">
				<label className="textName lft" for="fdata">
					Request_DATA:
				</label>
				<label className="textName lft" for="fdate">
					Request_DATE:
				</label>
				<label className="textName lft" for="fscenario">
					Scénář
				</label>
				<div className="inputContainer lft">
					<textarea className="textboxShow" type="text" id="fdata" name="fdata" onChange={ChangeDataXML} />
				</div>
				<div className="inputContainer lft">
					<input className="textboxShow" type="text" id="date" name="date" onChange={ChangeTimestamp} value={timeset} />
				</div>
				<div className="inputContainer lft">
					<select className="textboxShow" name="scenario" id="scenario" onChange={ChangeAction}>
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
