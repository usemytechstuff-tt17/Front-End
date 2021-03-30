import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import LoginForm from './components/Login';

import Create from './components/createuser';
import ListingCard from './components/ListingCard';


ReactDOM.render(
	<Router>
		<Switch>
			<Route path='/login' component={LoginForm} />
			<Route path='/register' component={Create} />
			<Route path='/listing' component={ListingCard}/>
			<Route exact path='/' component={App} />
		</Switch>
	</Router>,
	document.getElementById('root')
);