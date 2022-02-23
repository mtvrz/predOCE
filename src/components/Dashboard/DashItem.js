import './DashItem.css';
import Card from '../UI/Card';
import PredoceIcon from '../IconSource/predoceneniIcon.png';
import DevelopIcon from '../IconSource/developIcon.png';
import AUWIcon from '../IconSource/learnIcon.png';
const DashItem = (props) => {
	let IconChoice = '';
	if (props.icon === 'predoceneni') IconChoice = PredoceIcon;
	else if (props.icon === 'AUW') IconChoice = AUWIcon;
	else IconChoice = DevelopIcon;
	return (
		<Card className="itemContainer">
			<div className="itemView">
				<div className="itemShowImage">
					<img className="icon" alt={props.icon} src={IconChoice} />
				</div>
			</div>
			<div className="itemHeader">{props.title}</div>
		</Card>
	);
};
export default DashItem;
