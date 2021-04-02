import React, { useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../contexts/userContext';
import { TechContext} from '../contexts/techContext';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth';

import Button from '@material-ui/core/Button';
import axios from 'axios';

const StyleDiv = styled.div`
	border:1px solid black;
	color:black;
	display:flex;
	flex-direction:column;
	width:25%;
	height:90%;
	margin: 2% 3%;
	border-radius:18px;
	background-color:white;
	padding-bottom:2px;
	position:relative;
	};
	&:hover{
		.info{
			opacity:.7;
		};
	};
	img{
		box-sizing:content-box;
		object-fit: cover;
		width:100%;
		border-radius:18px 18px 0 0;
		height:300px;
	};
	.card{
		display:flex;
		flex-flow: column;
		align-items:flex-start;
		justify-content:space-evenly;
		font-weight:bold;
		width: 100%;
		height: auto;
		position: absolute;
		top: 0;
		left: 0;
	};
	.card p{
		margin:1%;
		font-size:1rem;
	};
	.image h1{
		margin:0;
		color:black;
		text-transform:capitalize;
		font-size:2vw;
	};
	.image{
		height:100%;
	};
	.info{
		display:flex;
		flex-flow:column;
		margin-top:15%;
		width: 100%;
		height: auto;
		top: 0;
		left: 0;
		z-index:10;
		background-color:white;
		opacity:0;
		
	};
	@media (max-width:991px){
		width:40%;
		img{
			height:250px;
		};
		.image h1{
		font-size:3vw;
		};
	};
	@media (max-width:470px){
		width:60%;
		.cards{
			flex-direction:column;
			align-items: center;
			justify-content: center;
			flex-wrap: nowrap;
		};
		img{
			height:200px;
		};
		.image h1{
		font-size:4vw;
		};
	};
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

	

	return (
	
	<StyleDiv >
		<div className="image">
			<img src={image} alt={image}/>
			<h1>{card.item_name}</h1>
			{Number(localId)===card.user_id && isLoggedIn && (
				<div className='ownerButtons'>
					<Link to={`/editpage/${card.item_id}`}><Button color="primary" variant= "contained">edit</Button></Link> 
					<Button color="secondary" variant= "contained" onClick={handleDeleteClick}>delete</Button>
				</div>
			)}
		</div>

		<div className="card">	
			<div className="info">
				<p>Price: ${card.item_price}/Day</p>
				<p>Available: {card.item_available ? 'Yes' : 'No'}</p>
				<p>Owner: {card.item_owner}</p>
				<p>Description:<br />{card.item_description}</p>
        		{Number(localId)!==card.user_id&&<p> Email:{((Number(localId)!==card.user_id && isLoggedIn && <a href={`mailto:${card.owner_email}`}>{card.owner_email} </a>)||'Please log in.')}</p>}
			</div>
		</div>
	</StyleDiv>	
	);
};

export default Card;

