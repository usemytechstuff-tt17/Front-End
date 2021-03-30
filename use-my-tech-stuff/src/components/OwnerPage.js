import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth'

import Card from './Card';

const initialUserData = [];

 const OwnerPage = () => {
    const { id } = useParams();

    const [userData, setUserData] = useState(initialUserData);

    useEffect(() => {
        axiosWithAuth()
        .get(`https://usemytechstuff.herokuapp.com/api/users/2/items`)
        .then(res => {
            console.log('OwnerPage: ',res.data)
            setUserData(res.data)
        })
        .catch(err => {
            console.log('Owner Page :', err)
        })
    }, []);

    return(
    <div>
        
        {
            userData.map( listing => {
            return <Card card={listing}  />   
            }) 
        }
        user page
    </div>    
    )
}

export default OwnerPage