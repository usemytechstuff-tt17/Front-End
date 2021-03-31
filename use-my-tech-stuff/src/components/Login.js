import React, { useState ,useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../contexts/userContext';

export default function LoginForm() {

	const initialValue = {  username:'', password: '' };
	const [userValue, setUserValue] = useState(initialValue);
	const { setLocalId , setIsLoggedIn} = useContext(UserContext);

	
	const handleChange = (evt) => {
		const{name, value}=evt.target;
		setUserValue({...userValue, [name]:value})
	};

	const {push} = useHistory();
	
	const submitLogin = (value) => {
		axios.post('https://usemytechstuff.herokuapp.com/api/users/login', value)
		.then(res => {
			console.log(res)
			setLocalId(res.data.user_id);
			setIsLoggedIn(res.data.token);
			push('/')
		})
		.catch(err => {
			console.log(err.response)
		})
	}
	
	const onSubmit = (evt) => {
		evt.preventDefault();
		submitLogin(userValue);
	}
	
	
	
	return (
		<div>
			<form onSubmit={onSubmit}>
				<TextField
						variant="outlined"
						type='text'
						onChange={handleChange}
						value={userValue.username}
						placeholder='username...'
						name="username"
				/>
				<TextField
					type='password'
					value={userValue.password}
					onChange={handleChange}
					placeholder='password...'
					name="password"
					variant="outlined"
				/>
		  <Button type='submit' variant= "contained" >Log In</Button>
			</form>
		</div>
	);
}
