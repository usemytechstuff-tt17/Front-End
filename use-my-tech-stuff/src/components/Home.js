import React, { useContext } from 'react';
import {Link} from 'react-router-dom'

import { TechContext } from '../contexts/techContext';
import Card from './Card';
import styled from 'styled-components'
import Banner from '../theme/Banner.jpeg'

const StyleDiv = styled.div`
	margin:0;
	h1{
		color: white;
	}
	.cards{
		display:flex;
		flex-flow: row wrap;
		justify-content: space-evenly;
		align-items: flex-end;
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
		font-size:5rem;
		border-radius:8px;
		border: 1px solid white;
		color:white;
		background-color:black;
		opacity:0;
	};
	.banner:hover{
		.joinBtn{
			opacity:1;
		};
		img{
			-webkit-filter: blur(5px);
			filter: blur(5px);
		};
	};
`

const Home = () => {
	const { tech } = useContext(TechContext);

	return (
		
		<StyleDiv className='allCards'>
			<div className="banner">
				<img src={Banner} alt='banner' />
				<Link to="/register"><button className="joinBtn">Come, Borrow My things!</button></Link>
			</div>
			<h1>You can find listings of anything!</h1>
			<div className="cards">
			{tech.map((card) => (
				<Card key={card.item_id} card={card} />
			))}
			</div>
		</StyleDiv>
	);
};

export default Home;
