import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Card from './Card';

const initialUserData = [];

export default OwnerPage = () => {
    const { id } = useParams;

    const [userData, setUserData] = useState(initialUserData);

    useEffect(() => {
        axios.get(`https://usemytechstuff.herokuapp.com/api/users/${id}`)
        .then(res => {
            console.log(res.data)
            setUserData(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

    return(
    <div>
        <div className='ownerHeader'>
            {/* <h1>Welcome {userData.userName}</h1> */}
        </div>
        
        {
            userData.items.map( listing => {
            <CreateOwnerCard props={listing}  />   
        }) 
        }
    </div>    
    )
}