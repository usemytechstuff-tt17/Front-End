import React, { useState } from 'react';
import {Link} from 'react-router-dom';

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
					<input
						type='email'
						onChange={change}
						value={userValue.userName}
						placeholder='Your-Email@example.com'
						name="email"
				/>
				</label>

				<label>
				<input
					type='password'
					value={userValue.password}
					onChange={change}
					placeholder='password...'
					name="password"
					
				/>
				</label>
			</form>
			<button onClick={change}>Log In</button>
				<Link to="/register">
					<button>Register</button>
				</Link>
		</div>
	);
}
