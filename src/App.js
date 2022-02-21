import './components/UI/style.css';
import Dashboard from './components/Dashboard/Dashboard';
import PredOCE from './components/predOCE/PredOCE';

const App = () => {
	let x = 1;

	if (x === 1) {
		return (
			<div className="">
				<Dashboard></Dashboard>
			</div>
		);
	} else
		return (
			<div className="">
				<PredOCE></PredOCE>
			</div>
		);
};

export default App;
