//import DashItem from './DashItem';
import DashboardScreenContainer from './DashboardScreenContainer';

const Dashboard = (props) => {
	const Give_Value_Up = (value) => {
		props.Set(value);
	};
	return (
		<div>
			<DashboardScreenContainer SetVal={Give_Value_Up}></DashboardScreenContainer>
		</div>
	);
};

export default Dashboard;
