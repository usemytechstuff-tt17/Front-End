import React, { useContext } from 'react';
import {Link} from 'react-router-dom'

import {UserContext} from '../contexts/userContext'
import { TechContext } from '../contexts/techContext';
import Card from './Card';
import styled from 'styled-components'
import Banner from '../theme/Banner.jpeg'
import SearchBar from './SearchBar';
import CircularProgress from '@material-ui/core/CircularProgress';


const StyleDiv = styled.div`
	margin:0;
	h1{
		color: white;
	};
	.cards{
		display:flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	};
	.banner{
		position: relative;
		margin: auto;
		width: 100%;
		margin-top: 5%;
	};
	.banner img{
		display: block;
		position: relative;
		width: 100%;
	};
	.joinBtn{
		margin: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		font-size:4vw;
		border-radius:8px;
		border: 1px solid white;
		color:white;
		background-color:black;
		opacity:1;
	};
	.joinBtn:hover{
		border:1px solid green;
		color:black;
		font-weight:bold;
		-webkit-text-stroke: 2px white;
		background:url('https://images.pexels.com/photos/1625878/pexels-photo-1625878.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
	};
`

const Home = () => {
	const { tech } = useContext(TechContext);
	const { isLoggedIn, localId , isLoading} = useContext(UserContext);

	return (
		
		<StyleDiv className='allCards'>
			<div className="banner">
				<img src={Banner} alt='banner' />
				{ !isLoggedIn && !localId &&
				<Link to="/login"><button className="joinBtn">Come, Borrow My things!</button></Link>}
			</div>
			<h1>You can find listings of anything!</h1>
			<SearchBar/>
			{ isLoading && <div>
				<h3 style={{color:'white'}}>Loading...</h3>
				<CircularProgress/>
				</div>}
			{ !isLoading && <div className="cards">
			{tech.map((card) => (
				<Card key={card.item_id} card={card} />
			))}
			</div>}
		</StyleDiv>
	);
};

export default Home;


