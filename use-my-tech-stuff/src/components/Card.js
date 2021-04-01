import React, { useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../contexts/userContext';
import { TechContext} from '../contexts/techContext';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth';

import Button from '@material-ui/core/Button'
import axios from 'axios';

const StyleDiv = styled.div`
	border:1px solid black;
	color:black;
	display:flex;
	flex-direction:column;
	width:30rem;
	margin: 10px 0;
	border-radius:0 0 18px 0;
	box-shadow: -8px 8px #385898;
	background-color:white;
	padding-bottom:2px;
	img{
		height:300px;		
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
        })
        .catch(err => {
            console.log({err})
        })
    }

	const [image,setImage] = useState('')
	useEffect(() => {
		axios.get('https://dog.ceo/api/breeds/image/random')
		.then(res => {
			setImage(res.data.message);
		})
		.catch(err => {
			console.log(err)
		})
	},[])

console.log(card)
	return (
		<StyleDiv className='card'>
			{/* <img src='https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'/> */}
			<img src={image} alt={image}/>
			<h3>Item: {card.item_name}</h3>
			<p>Price: {card.item_price}</p>
			<p>Owner: {card.item_owner}</p>
			<p>Available: {card.item_available ? 'Yes' : 'No'}</p>
			{Number(localId)!==card.user_id&&<p> Email:{((Number(localId)!==card.user_id && isLoggedIn && <a href={`mailto:${card.owner_email}`}>{card.owner_email} </a>)||'Please log in.')}</p>}
			{Number(localId)===card.user_id && isLoggedIn && (
				<div className='ownerButtons'>
					<Link to={`/editpage/${card.item_id}`}><Button color="primary" variant= "contained">edit</Button></Link> 
					<Button color="secondary" variant= "contained" onClick={handleDeleteClick}>delete</Button>
				</div>
			)}
		</StyleDiv>
	);
};

export default Card;

