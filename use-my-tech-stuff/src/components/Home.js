import React, { useContext } from 'react';

import { TechContext } from '../contexts/techContext';
import Card from './Card';

const Home = () => {
	const { tech } = useContext(TechContext);
	console.log(tech);

	return (
		<div className='allCards'>
			{tech.map((card) => (
				<Card key={card.item_id} card={card} />
			))}
		</div>
	);
};

export default Home;
