import React, { useEffect, useState, useContext } from 'react';

import { TechContext } from '../contexts/techContext';
import Card from './Card';

const OwnerPage = () => {
	const { tech } = useContext(TechContext);

	const userCard = tech.filter( item =>{ 
		return item.user_id === Number(localStorage.getItem("id"))
	})
	
	return (
		<div>
            <div className='userInfo'>
				<h2>Welcome Friend!</h2>
                <p> Here are your {userCard.length} items</p>

            </div>
            <div className='cardContainer'>
                {userCard.map((card) => {
				return <Card key={card.item_id} card={card} />;
			})}

            </div>
		</div>
	);
};

export default OwnerPage;
