import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';

import axiosWithAuth from '../utils/axiosWithAuth';
import { TechContext } from '../contexts/techContext';

const initialState= {
    item_name: '',
    item_price: '',
    item_description: '',
    item_category: '',
};

const putData = {
    item_name: 'Gus',
    item_price: '32',
    item_description: 'yum',
    item_category: 'three',
}

const EditPageForm = () => {
    const { push } = useHistory();
    const { id } = useParams();
    const { tech, setTech } = useContext(TechContext);

    const [editItem, setEditItem] = useState(initialState)

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
            // Need to setState with context state
            setTech([...tech, putData])
            push(`/`)
        })
        .catch(err => {
            console.log(err)
        });
    };

    const changeHandler = e => {
        setEditItem({
            ...editItem,
            [e.target.name]: e.target.value
        });
        // console.log('changeH: ',editItem)
    };

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
                <Link to='/ownerpage' ><button>Cancel</button></Link>
            </div>
        </form>
    </div>
    );
};

export default EditPageForm;
