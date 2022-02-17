import './DashItem.css';
import Card from '../UI/Card';

const DashItem = (props) => {
	return (
		<Card className="itemContainer">
			<div className="itemView">
				<div className="itemShowImage"></div>
			</div>
			<div className="itemHeader">{props.title}</div>
		</Card>
	);
};
export default DashItem;
