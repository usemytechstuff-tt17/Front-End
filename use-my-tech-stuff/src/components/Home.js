import React, { useContext } from 'react';

import { TechContext } from '../contexts/techContext';

const Home = () => {
	const { tech } = useContext(TechContext);

	console.log (tech)

	return (
	<div>
	</div>);
};

export default Home;
