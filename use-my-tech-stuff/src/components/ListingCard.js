import React,{ useState, useEffect }  from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';


const initialData = {
    name: 'Uber cool camera',
    price: 10000,
    details: 'My one of a kind kodak disposable camera',
}

const ListingCard =() => {

    const [data, setData] = useState(initialData);
    
    useEffect(() => {
        axiosWithAuth().get('/items')
        .then( res => {
            console.log(res)
            setData(res.data)
        })
        .catch((err) => {
            console.log(err.response)
        })
    },[])

    return(
        <div>
        <h2>{data.name}</h2>
        <p>img?</p>
        <p>${data.price}/per day</p>
        <p>Details: {data.details}</p>
        </div>
    )
}

export default ListingCard