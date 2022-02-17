import Expenses from './components/Expenses/Expenses';
import Environment from './components/UI/Environment';

const App = () => {
	const expenses = [
		{
			id: 'e1',
			title: 'Test Value 1',
			amount: 94.12,
			date: new Date(2020, 7, 14),
		},
		{
			id: 'e2',
			title: 'Test Value 2',
			amount: 799.49,
			date: new Date(2021, 2, 12),
		},
		{
			id: 'e3',
			title: 'Test Value 3',
			amount: 294.67,
			date: new Date(2021, 2, 28),
		},
		{
			id: 'e4',
			title: 'Test Value 4',
			amount: 450,
			date: new Date(2021, 5, 12),
		},
	];

	return (
		<div>
			<Environment title="dev" />
			<Expenses items={expenses} />
		</div>
	);
};

export default App;
