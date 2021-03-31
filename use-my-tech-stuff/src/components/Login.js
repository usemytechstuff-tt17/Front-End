import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

export default function LoginForm() {

	const initialValue = {  username:'', password: '' };
	const [userValue, setUserValue] = useState(initialValue);
	
	const handleChange = (evt) => {
		const{name, value}=evt.target;
		setUserValue({...userValue, [name]:value})
	};

	const {push} = useHistory();
	
	const submitLogin = (value) => {
		axios.post('https://usemytechstuff.herokuapp.com/api/users/login', value)
		.then(res => {
			console.log(res)
			localStorage.setItem('userId', res.data.user_id);
			localStorage.setItem('token', res.data.token);
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
				<label>
					<input
						type='text'
						onChange={handleChange}
						value={userValue.username}
						placeholder='username...'
						name="username"
				/>
				</label>
				<label>
				<input
					type='password'
					value={userValue.password}
					onChange={handleChange}
					placeholder='password...'
					name="password"
				/>
				</label>
			<button>Log In</button>
			</form>
		</div>
	);
}
