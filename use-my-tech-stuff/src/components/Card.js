import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../contexts/userContext';
import { TechContext} from '../contexts/techContext';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth';


const StyleDiv = styled.div`
	border:1px solid black;
	color:black;
	display:flex;
	flex-direction:column;
	width:20rem;
	margin: 10px 0;
	border-radius:18px 18px 0 0;
	box-shadow: -5px 8px #596C56;
	background-color:white;
	img{
		height:300px;
		border-radius:18px 18px 0 0;
	}
`

const Card = (props) => {
	const { isLoggedIn, localId } = useContext(UserContext);
	const { tech, setTech } = useContext(TechContext);
	const { card } = props;

	const deleteItem = id => {  //Deletes item off of local state
        setTech(tech.filter(item =>item.item_id !== Number(id)))
    }

    const handleDeleteClick = e => {
        e.preventDefault();
        axiosWithAuth()
        .delete(`/items/${card.item_id}`)
        .then(res => {
            deleteItem(res.data.item_id)
            // push('/ownerpage')
        })
        .catch(err => {
            console.log({err})
        })
    }

	return (
		<StyleDiv className='card'>
			<img src='https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'/>
			<h3>Item: {card.item_name}</h3>
			<p>Price: {card.item_price}</p>
			<p>Owner: {card.item_owner}</p>
			<p>Available: {card.item_available ? 'Yes' : 'No'}</p>
			{Number(localId)===card.user_id && isLoggedIn && (
				<div className='ownerButtons'>
					<Link to={`/editpage/${card.item_id}`}><button>edit</button></Link> 
					<button onClick={handleDeleteClick}>delete</button>
				</div>
			)}
			{Number(localId)!==card.user_id && isLoggedIn && (
				<div className='userButtons'>
					<button disabled={card.item_available ? false : true}>add</button>
				</div>
			)}
		</StyleDiv>
	);
};

export default Card;

