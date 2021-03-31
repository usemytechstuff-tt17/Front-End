import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

export default function LoginForm() {
	const initialValue = { email: '', username:'', password: '' };
	const userInfo = [];
	const [info, setInfo] = useState(userInfo);
	const [userValue, setUserValue] = useState(initialValue);
	const change = (evt) => {
		const{name, value}=evt.target
		setUserValue({...userValue, [name]:value})
	};
	const onSubmit = (evt) => {
        evt.preventDefault();

    }
	return (
		<div>
			<form onSubmit={onSubmit}>
				<label>
				<TextField
						type='email'
						onChange={change}
						value={userValue.userName}
						placeholder='Your-Email@example.com'
						name="email"
						variant="outlined"
				/>
				</label>

				<label>
				<TextField
					type='password'
					value={userValue.password}
					onChange={change}
					placeholder='password...'
					name="password"
					variant="outlined"
					
				/>
				</label>
			</form>
			<Button variant= "contained" onClick={change}>Log In</Button>
				<Link to="/register">
					<Button variant= "contained" >Register</Button>
				</Link>
		</div>
	);
}
