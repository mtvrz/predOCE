import './PredOCEHelpButton.css';
import Icon from '../IconSource/reloadIcon.png';
const PredOCEHelpButton = () => {
	const PageReload = () => {
		window.location.reload(false);
	};
	return (
		<div className="btPosition">
			<img className="pic" alt="help" src={Icon} onClick={PageReload} />
		</div>
	);
};
export default PredOCEHelpButton;
