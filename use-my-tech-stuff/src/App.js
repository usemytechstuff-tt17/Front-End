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
import HiddenRoute from './utils/HiddenRoute';
import axiosWithAuth from './utils/axiosWithAuth';
import useId from './hooks/useId';

function App() {

	const [tech, setTech] = useState([]);
	const [localId, setLocalId,isLoggedIn, setIsLoggedIn] = useId(false,false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
 		axiosWithAuth()
			.get('/items')
			.then((res) => {
				setTech(res.data);
				setIsLoading(false)
			})
			.catch((err) => {
				console.log(err);
			});
	}, [isLoading]);

	return (
		<div className='app'>
			<TechContext.Provider value={{ tech, setTech }}>
				<UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, setLocalId, localId, isLoading }}>
					<Nav />
					<Switch>
						<PrivateRoute  path='/editpage/:id' component={EditPageForm} />
						<PrivateRoute  path='/ownerpage' component={OwnerPage} />
						<PrivateRoute path='/createlisting' component={CreateListing} />
						<HiddenRoute path='/login' component={LoginForm} />
						<HiddenRoute path='/register' component={Create} />
						<Route path='/' component={Home} />
					</Switch>
				</UserContext.Provider>
			</TechContext.Provider>
		</div>
	);
}
export default App;
