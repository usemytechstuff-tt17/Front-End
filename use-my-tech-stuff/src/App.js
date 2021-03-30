import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TechContext } from './contexts/techContext';
import { UserContext } from './contexts/userContext';

import Create from './components/createuser';
import Home from './components/Home';
import LoginForm from './components/Login';
import Nav from './components/Nav';

import CreateListing from './components/CreateListing';

import './App.css';
import axios from 'axios';

function App() {
	const [tech, setTech] = useState([]);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	// Quick way to set state without knowing what localStorage item will be called - may change later
	useEffect(() => {
		if (!localStorage.token) {
			localStorage.setItem('token', '');
		}

		const userStatus = localStorage.getItem('token');
		if (!userStatus) {
			setIsLoggedIn(false);
		} else {
			setIsLoggedIn(true);
		}
	}, [isLoggedIn]);

	console.log(isLoggedIn);

	useEffect(() => {
		axios
			.get('https://usemytechstuff.herokuapp.com/api/items')
			.then((res) => {
				setTech(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className='app'>
			<TechContext.Provider value={{ tech }}>
				<UserContext.Provider value={{ isLoggedIn }}>
					<Nav />
					<h1>Use My Tech Stuff</h1>
					<Switch>
						<Route path='/createlisting' component={CreateListing} />
						<Route path='/login' component={LoginForm} />
						<Route path='/register' component={Create} />
						<Route path='/' component={Home} />
					</Switch>
				</UserContext.Provider>
			</TechContext.Provider>
		</div>
	);
}
export default App;
