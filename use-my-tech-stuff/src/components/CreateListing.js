import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth';
import {TechContext} from '../contexts/techContext'

const StyleDiv = styled.div`
	background-color: white;
	border: 1px solid white;
	color: white;
    width:30rem;
    margin:auto;
    margin-top:5rem;
    border-radius: 8px;
    box-shadow: -8px 8px #385898;
    padding:5%;
`

const initialFormValues = {
	item_name: '',
	item_price: '',
	item_description: '',
    item_available:''
};

const CreateListing = () => {
	const [formValues, setFormValues] = useState(initialFormValues);
    const { tech, setTech } = useContext(TechContext);
	const { push } = useHistory();

	const onSubmit = (evt) => {
		evt.preventDefault();

		axiosWithAuth()
			.post('/items', formValues)
			.then((res) => {
				setFormValues(initialFormValues);
                setTech([...tech, res.data[0]])
				push('/ownerpage');
			})
			.catch((err) => {
				console.log(err.response);
			});
	};

	const onChange = (evt) => {
		const { name, value } = evt.target;
		setFormValues({ ...formValues, [name]: value });
	};

	return (
		<StyleDiv>
            <h1>Create Listing</h1>
			<form onSubmit={onSubmit}>
				<label>
					<TextField
						label='Item Name'
						onChange={onChange}
						value={formValues.item_name}
						name='item_name'
						variant='outlined'
						placeholder='Item Name'
						margin='normal'
						required
					/>
				</label>
				<br />
				<br />
				<label>
					<TextField
						label='Price'
						onChange={onChange}
						value={formValues.item_price}
						name='item_price'
						variant='outlined'
						placeholder='Price'
						margin='normal'
						required
					/>
				</label>
				<br />
				<label>
					<TextField
						label='Description'
						onChange={onChange}
						value={formValues.item_description}
						name='item_description'
						variant='outlined'
						placeholder='Description'
						multiline
						rows={4}
						margin='normal'
						required
					/>
				</label>
				<p style={{color:'black'}} >Is it available?</p>
                <label style={{color:'black'}}  for='item_yes'>Yes</label>
                <input 
                type= "radio"
                id='item_yes'
                onChange={onChange}
                value= {true}
                name= "item_available"
                />
                <label style={{color:'black'}} for='item_no'>No</label>
                <input 
                type= "radio"
                id='item_no'
                onChange={onChange}
                value= {false}
                name= "item_available"
                />
				<br />
				<Button variant='contained' type='submit'>
					Submit
				</Button>
			</form>
		</StyleDiv>
	);
};

export default CreateListing;
