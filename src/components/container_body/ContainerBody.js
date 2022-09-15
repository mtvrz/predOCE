import classes from './Container_body.module.css';
import { preevaluation_scenarios_enum, popUp_styles_enum, error_messages_enum } from '../constants/constans';
import { request_to_prettier, request_to_object, request_date_process } from '../func/func';
import React, { useState, Fragment } from 'react';
import Container from '../UI/container/Container';
import ErrorPopup from '../UI/error_popup/Popup';

const ContainerBody = (props) => {
		const [question_step_definition, getQuestion_step_definition] = useState(props.layout.step_definition);
		const [focusMode, getFocusMode] = useState([false, false, false]);
		const [question_step_visibility, getQuestion_step_visibility] = useState(props.layout.question_layout);
		const [req_data, getReq_data] = useState(props.data.inputData.request_data);
		const [req_date, getReq_date] = useState(props.data.inputData.request_date);
		const [question_scenario, getQuestion_scenario] = useState(props.data.inputData.scenario);
		const [errorStatus, getErrorStatus] = useState(false);
		const [selectVisibility, getselectVisibility] = useState(false);
		const [obj, getObj] = useState(props.data);
		const [errorMessage, getErrorMessage] = useState('');

		const ClickHandler = () => {
			selectVisibility === false ? getselectVisibility(true) : getselectVisibility(true);
			if (validate() === true) {
				if (question_step_definition === 3) {
					console.log(obj);
					props.updateData(obj);
				}
				question_step_definition === 3
					? step_fwd()
					: props.Step_definition(1);
				Question_step_forward();
				question_step_definition === 3
					? question_scenario !== '999'
						? props.Step_previous(1)
						: props.Step_previous(2)
					: props.Step_previous(1);

			}

		};
		const step_fwd = () => {
			if (question_scenario !== '999') {

				props.getScript(obj, question_scenario);
				//console.log("script not found")
			} else props.Step_definition(2);
		};
		const timeOut = () => {
			getErrorStatus(false);
		};
		const validate = (subStep) => {

			switch (question_step_definition) {
				case 1: {
					//console.warn("validating...")
					//request_to_prettier(req_data)
					try {
						let temp_object = request_to_object(request_to_prettier(req_data));
						getObj({
							...obj,
							person: { name: temp_object.jmeno, surname: temp_object.prijmeni },
							risks_array: temp_object.risks,
							rowID: temp_object.row,
						});
						getErrorMessage('');
						return true;
					} catch (error) {
						getErrorMessage(error_messages_enum.error_xml);
						console.error('creating XML error');
						getErrorStatus(true);
						setTimeout(timeOut, 3000);
						return false;
					}
				}
				case 2: {
						let temp_date_object = request_date_process(req_date);
						if (temp_date_object.date_basic.length ===23){
							debugger
							getObj({
									...obj,
									date: { request_date: temp_date_object.date_basic, request_date_One: temp_date_object.date_plus },
								},
							);
							getErrorMessage('');
							return true;
						}
				else {
						getErrorMessage(error_messages_enum.error_time);
						console.error('creating request_date error');
						getErrorStatus(true);
						setTimeout(timeOut, 3000);
						return false;
					}
				}
				default: {
					return true;
				}

			}
		};
		const get_RequestData = (event) => {
			getReq_data(event.target.value);
			getObj({ ...obj, inputData: { ...obj.inputData, request_data: event.target.value } });
		};
		const get_RequestDate = (event) => {
			getReq_date(event.target.value);

			getObj({ ...obj, inputData: { ...obj.inputData, request_date: event.target.value } });
		};
		const Question_step_forward = () => {
			question_step_definition !== 3
				? getQuestion_step_definition(question_step_definition + 1)
				: getQuestion_step_definition(question_step_definition);
			Check_visibility();
		};
		const Check_visibility = () => {
			switch (question_step_definition + 1) {
				case 1: {
					getQuestion_step_visibility({
						first_question_field: true,
						second_question_field: false,
						third_question_field: false,
					});
					break;
				}
				case 2: {
					getQuestion_step_visibility({
						first_question_field: false,
						second_question_field: true,
						third_question_field: false,
					});
					break;
				}
				case 3: {
					getQuestion_step_visibility({
						first_question_field: false,
						second_question_field: false,
						third_question_field: true,
					});
					break;
				}
				default: {
					getQuestion_step_visibility({
						first_question_field: false,
						second_question_field: false,
						third_question_field: false,
					});
				}
			}
		};
		const get_subStep = (event) => {
			//console.log(event.target.id)
			if (event.target.id === '1') {
				getQuestion_step_definition(1);
				getQuestion_step_visibility({
					first_question_field: true,
					second_question_field: false,
					third_question_field: false,
				});
			} else if (event.target.id === '2') {
				getQuestion_step_definition(2);
				getQuestion_step_visibility({
					first_question_field: false,
					second_question_field: true,
					third_question_field: false,
				});
			}
		};

		const FocusField = () => {
			question_step_definition === 1
				? getFocusMode([true, false, false])
				: question_step_definition === 2
					? getFocusMode([false, true, false])
					: question_step_definition === 3
						? getFocusMode([false, false, true])
						: getFocusMode([false, false, false]);
		};
		const BlurField = () => {
			getFocusMode([false, false, false]);
		};

		const Scenario_change_handler = (event) => {

			getQuestion_scenario(event.target.value);
			getObj({ ...obj, inputData: { ...obj.inputData, scenario: event.target.value } });

		};
		return (
			<Fragment>
				<Container isSmall={question_step_definition === 0 ? true : false} isForSee={selectVisibility}>
					<div className={classes.barCont}>
						<button id={'1'} onClick={get_subStep}>1</button>
						<button id={'2'} onClick={get_subStep}
										disabled={question_step_definition === 1 ? true : false}></button>
						<button id={'3'} onClick={get_subStep} disabled={true}></button>
						<div
							className={`${classes.bar} ${
								question_step_definition === 1
									? classes.barThirty
									: question_step_definition === 2
										? classes.barSixty
										: question_step_definition === 3
											? classes.barHundred
											: ''
							}`}
						>
							a
						</div>
					</div>
					<div className={`${classes.headstring} `}>
						<h4>
							{question_step_definition === 1
								? 'request data'
								: question_step_definition === 2
									? 'request date'
									: question_step_definition === 3
										? 'scenario'
										: ''}
						</h4>
					</div>
					<div className={classes.questionBody}>
        <textarea
					onFocus={FocusField}
					onBlur={BlurField}
					onChange={get_RequestData}
					defaultValue={req_data}
					className={`${
						question_step_visibility.first_question_field !== true
							? classes.hidden
							: ''
					} ${focusMode[0] === true ? classes.inputFocus : ''}`}
				/>

						<input
							type='text'
							onFocus={FocusField}
							onBlur={BlurField}
							onChange={get_RequestDate}
							defaultValue={req_date}
							className={`${
								question_step_visibility.second_question_field !== true
									? classes.hidden
									: ''
							} ${focusMode[1] === true ? classes.inputFocus : ''}`}
						/>

						<select
							onFocus={FocusField}
							onBlur={BlurField}
							defaultValue={question_scenario}
							onChange={Scenario_change_handler}
							className={`${classes.combac} ${
								question_step_visibility.third_question_field !== true
									? classes.hidden
									: ''
							} ${focusMode[2] === true ? classes.inputFocus : ''}`}
						>
							<option key={0} value='null'></option>
							{preevaluation_scenarios_enum.map((x) => {
								return (
									<option key={x.id} value={x.id}>{x.value}</option>
								);
							})}
						</select>
					</div>
					<button className={`${classes.questionButton} ${question_step_definition === 0 ? classes.hidden : ''}`}
									onClick={ClickHandler}
									disabled={question_step_definition === 3 && question_scenario === 'null' ? true : false}>
						{question_step_definition === 1 ||
						question_step_definition === 2
							? 'Další'
							: question_step_definition === 3 && question_scenario !== '999'
								? 'Generovat update'
								: question_step_definition === 3 && question_scenario === '999'
									? 'Načíst rizika'
									: ''
						}
					</button>
					<button className={`${classes.start_Bt} ${question_step_definition !== 0 ? classes.hidden : ''}`}
									onClick={ClickHandler}>Začít
					</button>
				</Container>
				<ErrorPopup style={popUp_styles_enum.error} status={errorStatus} txt={errorMessage} />
			</Fragment>
		);
	}
;
export default ContainerBody;
