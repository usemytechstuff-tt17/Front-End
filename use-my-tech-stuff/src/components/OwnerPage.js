import React, { useEffect, useState } from 'react'
import CreateOwnerCard from './CreateOwnerCard'

const initialUserData = [];

export default function OwnerPage() {

    const [userData, setUserData] = useState(initialUserData);

    useEffect(() => {
        // axios.get owner data
        // setUserData 
    })

    return(
    <div>
    {userData.map( listing => {
       <CreateOwnerCard props={listing}  />   
    }) 
    }
    </div>    
    )
}