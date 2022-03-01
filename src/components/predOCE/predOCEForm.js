import './PredOCEForm.css';

const PredOCEForm = (props) => {
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
					Scenario
				</label>
				<div className="inputContainer">
					<input className="textboxShow" type="text" id="fdata" name="fdata" />
				</div>
				<div className="inputContainer">
					<input className="textboxShow" type="text" id="fdate" name="fdate" />
				</div>
				<div className="inputContainer">
					<select className="textboxShow" name="scenario" id="scenario">
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
				<button className="btsubmit" onClick={props.onShowRisk}>
					Submit
				</button>
			</div>
		</div>
	);
};
export default PredOCEForm;
