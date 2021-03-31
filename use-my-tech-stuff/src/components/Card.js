import React, { useContext } from 'react';
import { UserContext } from '../contexts/userContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const StyleDiv = styled.div`
	border:1px solid white;
	color:white;
	display:flex;
	flex-direction:column;
	width:20rem;
	margin: 10px 0;
	border-radius:8px;
`

const Card = (props) => {
	const { isLoggedIn, localId } = useContext(UserContext);

	const { card } = props;

	return (
		<StyleDiv className='card'>
			<h3>Item: {card.item_name}</h3>
			<p>Price: {card.item_price}</p>
			<p>Owner: {card.item_owner}</p>
			<p>Available: {card.item_available ? 'Yes' : 'No'}</p>
			{Number(localId)===card.user_id && localId && isLoggedIn && (
				<div className='ownerButtons'>
					<Link to={`/editpage/${card.item_id}`}><button>edit</button></Link> 
					<button>delete</button>
				</div>
			)}
			{Number(localId)!==card.user_id && localId && isLoggedIn && (
				<div className='userButtons'>
					<button disabled={card.item_available ? false : true}>add</button>
				</div>
			)}
		</StyleDiv>
	);
};

export default Card;

