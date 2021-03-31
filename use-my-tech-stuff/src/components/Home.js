import React, { useContext } from 'react';

import { TechContext } from '../contexts/techContext';
import Card from './Card';
import styled from 'styled-components'

const StyleDiv = styled.div`
	display:flex;
	flex-flow: row wrap;
	justify-content: space-around;
	align-items: flex-end;
	
`
const Home = () => {
	const { tech } = useContext(TechContext);
	console.log(tech);

	return (
		<StyleDiv className='allCards'>
			{tech.map((card) => (
				<Card key={card.item_id} card={card} />
			))}
		</StyleDiv>
	);
};

export default Home;
