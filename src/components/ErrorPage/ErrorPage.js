import './ErrorPage.css';
import ErrorIcon from '../IconSource/errorIcon.png';
import { useState } from 'react';

const ErrorPage = (props) => {
	const [modalHide, getmodalHide] = useState('');
	const [error_Message_Content, geterror_Message_Content] = useState(props.message);
	const HideIt = () => {
		switch (props.continue_value) {
			case 1: {
				window.location.reload(false);
				break;
			}
			case 2: {
				getmodalHide('exitModal');
				break;
			}
			default: {
				getmodalHide('exitModal');
				break;
			}
		}
	};
	return (
		<div className={'mainErrBack ' + modalHide}>
			<div className="ErrContainerMain">
				<div className="errPic">
					<div className="errPicTop">
						<img className="icon" src={ErrorIcon} alt="ErrorIco" />
					</div>
					<div className="errPicBott">
						<p>{error_Message_Content}</p>
					</div>
				</div>
				<button className="btConfirm" onClick={HideIt}>
					Zpět na dashboard
				</button>
			</div>
		</div>
	);
};

export default ErrorPage;
