import './BasicScreenContainer.css';
import DashItem from '../Dashboard/DashItem';
import Card from './Card';

const BasicScreenContainer = () => {
	return (
		<Card className="basicBack">
			<div className="basicBackFlexCover">
				<DashItem title="Název 1"></DashItem>
				<DashItem title="Název 2"></DashItem>
				<DashItem title="Název 3"></DashItem>
				<DashItem title="Název 4"></DashItem>
			</div>
		</Card>
	);
};
export default BasicScreenContainer;
