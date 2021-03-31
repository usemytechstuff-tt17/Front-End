import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TechContext } from './contexts/techContext';
import { UserContext } from './contexts/userContext';

import Create from './components/createuser';
import Home from './components/Home';
import LoginForm from './components/Login';
import Nav from './components/Nav';
import OwnerPage from './components/OwnerPage';
import EditPageForm from './components/EditPageForm';
import CreateListing from './components/CreateListing';

import './App.css';
import PrivateRoute from './utils/PrivateRoute';
import axiosWithAuth from './utils/axiosWithAuth';
import useId from './hooks/useId';

function App() {

	const [tech, setTech] = useState([]);
	const [localId, setLocalId,isLoggedIn, setIsLoggedIn] = useId(false,false);


	useEffect(() => {
		axiosWithAuth()
			.get('/items')
			.then((res) => {
				console.log(res)
				setTech(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className='app'>
			<TechContext.Provider value={{ tech, setTech }}>
				<UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, setLocalId, localId }}>
					<Nav />
					<h1>Use My Tech Stuff</h1>
					<Switch>
						<PrivateRoute exact path='/editpage/:id' component={EditPageForm} />
						<PrivateRoute exact path='/ownerpage' component={OwnerPage} />
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
