import React, { Component, useContext } from 'react';
import { UserContext } from '../contexts/userContext';
import { Link } from 'react-router-dom';



const Card = (props) => {
	const { isLoggedIn } = useContext(UserContext);

	const { card } = props;
    const currentUserId = localStorage.getItem('userId')

	return (
		<div className='card'>
			<h3>Item: {card.item_name}</h3>
			<p>Price: {card.item_price}</p>
			<p>Owner: {card.item_owner}</p>
			<p>Available: {card.item_available ? 'Yes' : 'No'}</p>
			{Number(currentUserId)===card.user_id && isLoggedIn && (
				<div className='ownerButtons'>
					<Link to={`/editpage/${card.item_id}`}><button>edit</button></Link> 
					<button>delete</button>
				</div>
			)}
			{Number(currentUserId)!==card.user_id && isLoggedIn && (
				<div className='userButtons'>
					<button disabled={card.item_available ? false : true}>add</button>
				</div>
			)}
		</div>
	);
};

export default Card;

