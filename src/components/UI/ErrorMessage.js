//import { useState } from 'react';
import './ErrorMessage.css';

const ErrorMessage = (props) => {
	const message = props.Message;
	return (
		<div className={'errContainer ' + props.className}>
			<p>{message}</p>
		</div>
	);
};
export default ErrorMessage;
