import React, { useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../contexts/userContext';
import { TechContext} from '../contexts/techContext';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth';

import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';

const StyleDiv = styled.div`
	border:1px solid black;
	color:black;
	display:flex;
	flex-direction:column;
	width:30rem;
	margin: 10px 0;
	border-radius:18px;
	background-color:white;
	padding-bottom:2px;
	position:relative;
	&:hover{
		.info{
			opacity:.7;
		}
	}
	img{
		display:block;
		max-height:300px;
		position:relative;
		width:100%;
		border-radius:18px 18px 0 0;		
	}
	
	.card{
		display:flex;
		flex-flow: column;
		align-items:flex-start;
		justify-content:space-evenly;
		font-weight:bold;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
	.card p{
		margin:1%;
		font-size:1rem;
	}
	.image h1{
		margin:0;
		color:black;
		text-transform:capitalize;
	}
	.info{
		display:flex;
		flex-flow:column;
		margin-top:15%;
		width: auto;
		height: auto;
		top: 0;
		left: 0;
		z-index:10;
		background-color:white;
		opacity:1;
		
	}
`

const Card = (props) => {
	const { isLoggedIn, localId } = useContext(UserContext);
	const { tech, setTech } = useContext(TechContext);
	const { card } = props;
	const [isActive, setActive] = useState("false")

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

	const handleToggle = () => {
		setActive(!isActive);
	};

	return (
	
	<StyleDiv>
		<div className="image">
		<img src={image} alt={image} onClick={handleToggle}/>
		<h1>{card.item_name}</h1>
		{Number(localId)===card.user_id && isLoggedIn && (
			<div className='ownerButtons'>
				<Link to={`/editpage/${card.item_id}`}><Button color="primary" variant= "contained">edit</Button></Link> 
				<Button color="secondary" variant= "contained" onClick={handleDeleteClick}>delete</Button>
			</div>
		)}
		{Number(localId)!==card.user_id && isLoggedIn && (
			<div className='userButtons'>
				<Button color="default" variant="outlined" disabled={card.item_available ? false : true}>add</Button>
			</div>
		)}
		</div>
		<div className="card">	
			<div className="info">
				<p>Price: ${card.item_price}/Day</p>
				<p>Available: {card.item_available ? 'Yes' : 'No'}</p>
				<p>Owner: {card.item_owner}</p>
				<p>Description:<br />{card.item_description}</p>
			</div>
		</div>
	</StyleDiv>	
	
	);
};

export default Card;

