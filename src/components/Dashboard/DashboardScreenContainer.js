import './DashboardScreenContainer.css';
import DashItem from './DashItem';
import Card from '../UI/Card';

const BasicScreenContainer = () => {
	return (
		<Card className="basicBack light">
			<div className="basicBackFlexCover">
				<DashItem icon="predoceneni" title="Předběžné ocenění"></DashItem>
				<DashItem icon="AUW" title="AUW"></DashItem>
			</div>
		</Card>
	);
};
export default BasicScreenContainer;
