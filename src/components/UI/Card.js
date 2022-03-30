import './Card.css';

const Card = (props) => {
	const classes = 'card ' + props.className;
	const Cl = () => {
		try {
			props.onClick();
		} catch (error) {}
		//props.onClick();
	};
	return (
		<div className={classes} onClick={Cl}>
			{props.children}
		</div>
	);
};

export default Card;
