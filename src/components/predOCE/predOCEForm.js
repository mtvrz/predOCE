import react, { useState } from 'react';
import './PredOCEForm.css';

const PredOCEForm = (props) => {
	let PreevaluatePersonName = '';
	let xmldataDef =
		'<row><ROWID>1301</ROWID><Smlouva><IDContract>302995</IDContract><IDContractFull>0121000003732432</IDContractFull><DatumUzavreni>2022-02-02+01:00</DatumUzavreni><DatumPocatku>2022-02-10+01:00</DatumPocatku><Produkt>10560</Produkt><PojistnaDoba>37</PojistnaDoba><Frekvence>3</Frekvence><AgeSpravy>632</AgeSpravy><AgeSjednani>632</AgeSjednani><Ziskatel>8670</Ziskatel><ZiskatelJmeno>.Allrisk,a.s.</ZiskatelJmeno><ZiskatelMail>mail76@IDD.cz</ZiskatelMail><Dat_Vlozeni_KDP>2022-02-02T13:05:00.425+01:00</Dat_Vlozeni_KDP></Smlouva><Pojisteny><Index>1</Index><Jmeno>Josef</Jmeno><Prijmeni>Zamítnutý</Prijmeni><RC>8901011010</RC><Povolani>aranžér</Povolani><VstupniVek>34</VstupniVek><Zadost_o_LP>false</Zadost_o_LP></Pojisteny><Rizika><Riziko><TypRizika>ZP</TypRizika><VerzeRizika>Z5P</VerzeRizika><TypPlneni>PC</TypPlneni><PC>20000.0</PC><PCMax>500.0</PCMax><O_VEK>71</O_VEK></Riziko><Riziko><TypRizika>ZP</TypRizika><VerzeRizika>Z5Z</VerzeRizika><TypPlneni>PCdecr</TypPlneni><PC>2500000.0</PC><PCMax>500.0</PCMax><O_VEK>71</O_VEK></Riziko><Riziko><TypRizika>ZP</TypRizika><VerzeRizika>ID3N</VerzeRizika><TypPlneni>PC</TypPlneni><PC>500000.0</PC><PCMax>500.0</PCMax><O_VEK>65</O_VEK></Riziko><Riziko><TypRizika>ZP</TypRizika><VerzeRizika>ID1N</VerzeRizika><TypPlneni>PCdecr</TypPlneni><PC>1800000.0</PC><PCMax>500.0</PCMax><O_VEK>65</O_VEK></Riziko><Riziko><TypRizika>UP</TypRizika><VerzeRizika>DOU8</VerzeRizika><TypPlneni>PC</TypPlneni><PC>500.0</PC><PCMax>500.0</PCMax><O_VEK>71</O_VEK></Riziko><Riziko><TypRizika>ZDP</TypRizika><VerzeRizika>DON29Z</VerzeRizika><TypPlneni>PC</TypPlneni><PC>300.0</PC><PCMax>500.0</PCMax><O_VEK>65</O_VEK></Riziko><Riziko><TypRizika>ZDP</TypRizika><VerzeRizika>DOHP</VerzeRizika><TypPlneni>PC</TypPlneni><PC>500.0</PC><PCMax>500.0</PCMax><O_VEK>71</O_VEK></Riziko></Rizika></row>';
	const [timestamp, gettimestamp] = useState();
	const [dataXML, getdataXML] = useState();
	const [action, getaction] = useState();

	const RiskListFill = (xml) => {
		let i = true;
		let x = 1;
		let obj = [];
		while (i === true) {
			try {
				obj[x] = {
					ID: x,
					riziko: xml.getElementsByTagName('VerzeRizika')[x - 1].childNodes[x - 1].nodeValue,
					typRizika: xml.getElementsByTagName('TypRizika')[x - 1].childNodes[x - 1].nodeValue,
					typplneni: xml.getElementsByTagName('TypPlneni')[x - 1].childNodes[x - 1].nodeValue,
					pc: xml.getElementsByTagName('PC')[x - 1].childNodes[x - 1].nodeValue,
					uvek: xml.getElementsByTagName('O_VEK')[x - 1].childNodes[x - 1].nodeValue,
					prirazka: 0,
				};
			} catch (error) {
				console.error('Přetíženo');
				i = false;
			}
			x++;
		}
		console.log(obj);
	};
	const ConvertXML = () => {
		let parser = new DOMParser();
		let xmldoc = parser.parseFromString(xmldataDef, 'text/xml');
		PreevaluatePersonName = xmldoc.getElementsByTagName('Jmeno')[0].childNodes[0].nodeValue;
		PreevaluatePersonName += ' ' + xmldoc.getElementsByTagName('Prijmeni')[0].childNodes[0].nodeValue;
		RiskListFill(xmldoc);
	};

	const ChangeTimestamp = (event) => {
		gettimestamp(event.target.value);
	};
	const ChangeDataXML = (event) => {
		let val = event.target.value;
		val = val.replaceAll('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>', '');
		val = val.replaceAll(' ', '');
		getdataXML(val);
	};
	const ChangeAction = (event) => {
		getaction(event.target.value);
	};
	const SubmitButtonClickEvent = () => {
		//console.log(timestamp + '\n\n' + action + '\n\n' + dataXML);
		ConvertXML();
		props.getName(PreevaluatePersonName);
		props.onShowRisk();
	};

	return (
		<div className="container">
			<div className="flex">
				<label className="textName" for="fdata">
					Request_DATA:
				</label>
				<label className="textName" for="fdate">
					Request_DATE:
				</label>
				<label className="textName" for="fscenario">
					Scénář
				</label>
				<div className="inputContainer">
					<textarea className="textboxShow" type="text" id="fdata" name="fdata" onChange={ChangeDataXML} />
				</div>
				<div className="inputContainer">
					<input className="textboxShow" type="text" id="date" name="date" onChange={ChangeTimestamp} />
				</div>
				<div className="inputContainer">
					<select className="textboxShow" name="scenario" id="scenario" onChange={ChangeAction}>
						<option value="null"></option>
						<option value="OK">Předocenění - OK </option>
						<option value="OKv">Předocenění - OK s výlukou </option>
						<option value="NOK2">Předocenění - NOK 2 </option>
						<option value="NOK8">Předocenění - NOK 8 </option>
					</select>
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
