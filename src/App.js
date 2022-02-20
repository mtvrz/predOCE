import './components/UI/style.css';
import Dashboard from './components/Dashboard/Dashboard';
import PredOCE from './components/predOCE/PredOCE';

const App = () => {
	return (
		<div>
			<div className="hide">
				<Dashboard></Dashboard>
			</div>
			<div className="">
				<PredOCE></PredOCE>
			</div>
		</div>
	);
};

export default App;
