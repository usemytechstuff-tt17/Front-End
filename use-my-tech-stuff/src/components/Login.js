import React, { useState } from 'react';
import {Link} from 'react-router-dom';

export default function LoginForm() {
	const initialValue = { email: '', password: '' };
	const userInfo = [];
	const [info, setInfo] = useState(userInfo);
	const [userValue, setUserValue] = useState(initialValue);
	const change = (evt) => {
		const{name, value}=evt.target
		setUserValue({...userValue, [name]:value})
	};

	return (
		<div>
			<form>
				<input
					type='email'
					onChange={change}
					value={userValue.username}
					placeholder='Your-Email@example.com'
				/>
			</form>
			<form>
				<input
					type='password'
					value={userValue.password}
					onChange={change}
					placeholder='password...'
					
				/>
			</form>
			<button onClick={change}>Log In</button>
			
				<Link>
					<button>Register</button>
				</Link>
			
		</div>
	);
}
