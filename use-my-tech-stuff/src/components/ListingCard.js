import React,{ useState, useEffect }  from 'react';
// import axiosWithAuth from '../utils/axiosWithAuth';


const initialData = [{
    name: 'Uber cool camera',
    price: 10000,
    details: 'My one of a kind kodak disposable camera',
}]

const ListingCard =(props) => {

    // const [data, setData] = useState(initialData);
    
    // useEffect(() => {
    //     axiosWithAuth().get('/items')
    //     .then( res => {
    //         console.log(res)
    //         setData(res.data)
    //     })
    //     .catch((err) => {
    //         console.log(err.response)
    //     })
    // },[])

    return(
        <div>
        <h2>{props.name}</h2>
        <p>img?</p>
        <p>${props.price}/per day</p>
        <p>Details:{props.details}</p>
        </div>
    )
}

export default ListingCard