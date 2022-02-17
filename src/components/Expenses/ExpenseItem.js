import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
	const [title, setTitle] = useState(props.title);
	const clickHandler = () => {
		setTitle('deleting ...');
	};

	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<button onClick={clickHandler} className="bt">
					.
				</button>
				<div className="expense-item__price">${props.amount}</div>
			</div>
		</Card>
	);
};

export default ExpenseItem;
