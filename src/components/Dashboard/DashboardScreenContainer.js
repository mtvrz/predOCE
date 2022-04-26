import './DashboardScreenContainer.css';
import DashItem from './DashItem';
import Card from '../UI/Card';

const BasicScreenContainer = (props) => {
	const Give_Scenario_PredOce = () => {
		props.SetVal(2);
	};
	const Give_Scenario_AUW = () => {
		props.SetVal(4);
	};
	return (
		<Card className="basicBack light">
			<div className="basicBackFlexCover">
				<DashItem icon="predoceneni" title="Předběžné ocenění" onClick={Give_Scenario_PredOce}></DashItem>
				<DashItem icon="AUW" title="AUW" onClick={Give_Scenario_AUW}></DashItem>
			</div>
		</Card>
	);
};
export default BasicScreenContainer;
