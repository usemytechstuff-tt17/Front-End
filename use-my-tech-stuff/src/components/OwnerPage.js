import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import { TechContext } from '../contexts/techContext';

import Card from './Card';

const initialUserData = [];

const OwnerPage = () => {
	const { id } = useParams();
	const { tech, setTech } = useContext(TechContext);

	const [userData, setUserData] = useState(initialUserData);

	useEffect(() => {
		axiosWithAuth()
			.get(`https://usemytechstuff.herokuapp.com/api/users/2/items`)
			.then((res) => {
				console.log('OwnerPage: ', res.data);
				setUserData(res.data);
			})
			.catch((err) => {
				console.log('Owner Page :', err);
			});
	}, []);

	return (
		<div>
            <div className='userInfo'>
                <h2>Welcome {}</h2>
                <p> Here are your {userData.length} items</p>

            </div>
            <div className='cardContainer'>
                {userData.map((listing) => {
				return <Card key={listing.item_id} card={listing} />;
			})}

            </div>
		</div>
	);
};

export default OwnerPage;
