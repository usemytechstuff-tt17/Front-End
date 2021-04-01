import React, { useContext } from 'react';
import { TechContext } from '../contexts/techContext';
import Card from './Card';
import styled from "styled-components"

const StyleDiv = styled.div`
	display:flex;
	.cardContainer{
		display:flex;
		flex-flow: row wrap;
		justify-content: space-evenly;
		align-items: flex-end;
	}
`

const OwnerPage = () => {
	const { tech } = useContext(TechContext);
	const userCard = tech.filter( item =>{ 
		return item.user_id === Number(localStorage.getItem("id"))
	})
	
	return (
		<StyleDiv>
            <div className='userInfo'>
				<h2>Welcome Friend!</h2>
                <p> Here are your {userCard.length} items</p>
            </div>
            <div className='cardContainer'>
                {userCard.map((card) => {
				return <Card key={card.item_id} card={card} />;
			})}
            </div>
		</StyleDiv>
	);
};

export default OwnerPage;
