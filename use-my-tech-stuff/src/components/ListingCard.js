import axios from 'axios';
import React,{ useState, useEffect }  from 'react'



const initialData = {
    name: 'Uber cool camera',
    price: 10000,
    details: 'My one of a kind kodak disposable camera',
}

export default function ListingCard() {

    const [data, setData] = useState(initialData);

    useEffect(() => {
        axios.get('our-api.com')
        .then( response => {
            console.log(response)
        })
        .catch((err) => {
            console.log(err)
        })
    })

    return(
        <div>
        <h2>{data.name}</h2>
        <p>img?</p>
        <p>${data.price}/per day</p>
        <p>Details: {data.details}</p>
        </div>
    )
}