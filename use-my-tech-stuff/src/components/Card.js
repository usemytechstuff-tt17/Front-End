import React, { useContext } from 'react';
import { UserContext } from '../contexts/userContext';

const owner = false;

const Card = (props) => {
	const { isLoggedIn } = useContext(UserContext);
	const { card } = props;

	return (
		<div className='card'>
			<h3>Item: {card.item_name}</h3>
			<p>Price: {card.item_price}</p>
			<p>Owner: {card.item_owner}</p>
			<p>Available: {card.item_available ? 'Yes' : 'No'}</p>
			{owner && (
				<div className='ownerButtons'>
					<button>edit</button>
					<button>delete</button>
				</div>
			)}
			{isLoggedIn && (
				<div className='userButtons'>
					<button disabled={card.item_available ? false : true}>add</button>
				</div>
			)}
		</div>
	);
};

export default Card;

