import React from 'react';

const Card = props => {
    const {card} = props;
    
    return (
        <div className='card'>
            <h3>Item: {card.item_name}</h3>
            <p>Price: {card.item_price}</p>
            <p>Owner: {card.item_owner}</p>
            <p>Available: {card.item_available ? 'Yes' : 'No'}</p>
        </div>
    )
}

export default Card;