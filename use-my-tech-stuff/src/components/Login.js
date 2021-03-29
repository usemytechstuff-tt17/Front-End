import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	BrowserRouter,
} from 'react-router-dom';
export default function LoginForm() {
	const initialValue = { email: '', username:'', password: '' };
	const userInfo = [];
	const [Info, setInfo] = useState(userInfo);
	const [UserValue, setValue] = useState(initialValue);
	const change = (name, value) => {};
	return (
		<div>
			<form onSubmit={''}>
				<input
					type='email'
					onChange={change}
					name='email'
					value={UserValue.username}
					placeholder='Your-Email@example.com'
				/>
			</form>
			<form>
				<input
					type='password'
					value={UserValue.password}
					onChange={change}
					className='loginPassword'
					placeholder='password...'
				/>
			</form>
			<button>Log In</button>
		
		</div>
	);
}
