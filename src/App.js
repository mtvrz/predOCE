import './components/UI/style.css';
import Dashboard from './components/Dashboard/Dashboard';
import PredOCE from './components/predOCE/PredOCE';
import { useState } from 'react';

const App = () => {
	const [scenarioSet, getScenario] = useState(2);

	const SetScenario = (value) => {
		getScenario(value);
	};
	if (scenarioSet === 1) return <Dashboard Set={SetScenario} />;
	else if (scenarioSet === 2) return <PredOCE />;
	else if (scenarioSet === 3) return <div></div>;
};

export default App;
