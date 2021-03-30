import React,{ useState, useEffect }  from 'react';
// import axiosWithAuth from '../utils/axiosWithAuth';


const initialData = [{
    name: '',
    price: '',
    details: '',
}]

const CreateOwnerCard =(props) => {

    // const [data, setData] = useState(initialData);
    
        // axiosWithAuth().get('/items')
        // .then( res => {
        //     console.log(res)
        //     setData(res.data)
        // })
        // .catch((err) => {
        //     console.log(err.response)
        // })
    const editHandler = () => {

    }

    const deleteHandler = () => {
        // axios.delete
    }
    
    return(
        <div>
        <h2>{props.name}</h2>
        <p>img?</p>
        <p>${props.price}/per day</p>
        <p>Details:{props.details}</p>
        <button onClick={editHandler}>Edit</button>
        <button onClick={deleteHandler}>Delete</button> 
        </div>
    )
}

export default CreateOwnerCard