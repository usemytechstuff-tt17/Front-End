import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TechContext } from './contexts/techContext';

import Create from './components/createuser';
import Home from './components/Home';
import LoginForm from './components/Login';
import Nav from './components/Nav';

import './App.css';

function App() {
	const [tech, setTech] = useState();
	const [user, setUser] = useState();

	useEffect(() => {
		// Get tech
		// setTech
	}, []);

	return (
		<div className='app'>
			<TechContext.Provider value={{ tech }}>
				<Nav />
				<h1>Use My Tech Stuff</h1>
				<Switch>
					<Route path='/login' component={LoginForm} />
					<Route path='/register' component={Create} />
					<Route path='/' component={Home} />
				</Switch>
			</TechContext.Provider>
		</div>
	);
}
export default App;
