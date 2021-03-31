import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import axiosWithAuth from '../utils/axiosWithAuth';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

const StyleDiv = styled.div`
	/* display:flex;
    flex-direction: column;
    justify-content:left;
    align-items:flex-start; */
	background-color: #b28869;
	border: 1px solid white;
	color: white;
`;

const initialFormValues = {
	item_name: '',
	// Not in DB vvv
	// category: '',
	// ^^^^^^^^^^^^^
	item_price: '',
	item_description: '',
};

const CreateListing = () => {
	const [formValues, setFormValues] = useState(initialFormValues);

	const { push } = useHistory();

	const classes = useStyles();

	const onSubmit = (evt) => {
		evt.preventDefault();

		axiosWithAuth()
			.post('/items', formValues)
			.then((res) => {
				setFormValues(initialFormValues);
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
				{/* <label>
          // THERE'S NO CATEGORY FIELD IN THE DB
					<FormControl className={classes.formControl}>
						<InputLabel id='category'>Category</InputLabel>
						<Select
							labelId='category'
							name='category'
							value={formValues.category}
							onChange={onChange}
							required
						>
							<MenuItem value=''>--Select Category--</MenuItem>
							<MenuItem value='photography'>Film & Photography</MenuItem>
							<MenuItem value='television'>TV's</MenuItem>
							<MenuItem value='electronics'>Electronics</MenuItem>
							<MenuItem value='other'>Other</MenuItem>
						</Select>
					</FormControl>
				</label> */}
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
				<br />

				<Button variant='contained' type='submit'>
					Submit
				</Button>
			</form>
		</StyleDiv>
	);
};

export default CreateListing;
