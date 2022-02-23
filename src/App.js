import './components/UI/style.css';
import Dashboard from './components/Dashboard/Dashboard';
import PredOCE from './components/predOCE/PredOCE';

const App = () => {
	let x = 1;

	if (x === 1) {
		return <Dashboard />;
	} else return <PredOCE />;
};

export default App;
