import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	BrowserRouter,
} from 'react-router-dom';
export default function LoginForm() {
	const initialValue = { email: '', password: '' };
	const userInfo = [];
	const [Info, setInfo] = useState(userInfo);
	const [UserValue, setValue] = useState(initialValue);
	const change = (name, value) => {};
	return (
		<div>
			<form>
				<input
					type='email'
					onChange={change}
					className='loginEmail'
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
			<button onClick={change}>Log In</button>
			<BrowserRouter>
				<Link>
					<button>Register</button>
				</Link>
			</BrowserRouter>
		</div>
	);
}
