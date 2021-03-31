import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import axiosWithAuth from '../utils/axiosWithAuth';
import { TechContext } from '../contexts/techContext';

const initialState= {
    item_name: '',
    item_price: '',
    item_description: '',
    item_category: '',
};

// const putData = {
//     item_name: 'Gus',
//     item_price: '32',
//     item_description: 'yum',
//     item_category: 'three',
// }

const EditPageForm = () => {
    const { push,goBack } = useHistory();
    const { id } = useParams();
    const { tech, setTech } = useContext(TechContext);
    const [editItem, setEditItem] = useState(initialState)
    const handleBack = () => goBack()

    // Populates the Edit Form fields with the item with id matching
    useEffect(() => {
        axiosWithAuth()
        .get(`/items/${id}`)
        .then(res => {
            console.log('Use Effect: ',res.data)
            setEditItem(res.data)
        })
        .catch(err => {
            console.log(err.response)
        });
    }, []);

    // Updates both state and the server with the edits
    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .put(`/items/${id}`, editItem)
        .then(res => {
            console.log('EditPage Put: ',res)
            const filtered = tech.map(item => {})
            setTech(filtered) //update state
            push(`/`)
        })
        .catch(err => {
            console.log('Submit err: ',err.response)
        });
    };

    const changeHandler = e => {
        setEditItem({
            ...editItem,
            [e.target.name]: e.target.value
        });
    };

    const deleteItem = id => {  //Deletes item off of local state
        setTech(tech.filter(item =>item.item_id !== Number(id)))
    }

    const handleDeleteClick = e => {
        e.preventDefault();
        axiosWithAuth()
        .delete(`/items/${id}`)
        .then(res => {
            deleteItem(id)
            push('/ownerpage')
        })
        .catch(err => {
            alert(err.response)
        })
    }

    return(
    <div>
        <form onSubmit={handleSubmit}>
            <div className='edit-header'>
                <h4>Editing: <strong>{editItem.item_name}</strong></h4>
            </div>
            <label>Item Name
                <input 
                type= "text"
                onChange={changeHandler}
                value= {editItem.item_name}
                name= "item_name"
                />
            </label>
            <label>Category
                <select name="category" value={editItem.item_category} onChange={changeHandler}>
                    <option value="">--Select Category--</option>
                    <option value="photography">Film & Photography</option>
                    <option value="television">TV's</option>
                    <option value="electronics">Electronics</option>
                    <option value="other">Other</option>
                </select>
            </label>
            <label>Price
                <input 
                type= "text"
                onChange={changeHandler}
                value= {editItem.item_price}
                name= "item_price"
                />
            </label>
            <label>Description
                <input 
                type= "text"
                onChange={changeHandler}
                value= {editItem.item_description}
                name= "item_description"
                />
            </label>
            <div className='buttonContainer'>
                <button>Save</button>
            </div>
        </form>
        <button onClick={() => goBack()}>Cancel</button>
        <button onClick={handleDeleteClick} >Delete</button>
    </div>
    );
};

export default EditPageForm;
