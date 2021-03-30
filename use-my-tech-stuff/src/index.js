import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import LoginForm from './components/Login';

import Create from './components/createuser';
import Home from './components/Home';


ReactDOM.render(
	<Router>
		<App/>
		<Switch>
			<Route path='/login' component={LoginForm} />
			<Route path='/register' component={Create} />
			<Route path='/' component={Home}/>
		</Switch>
	</Router>,
	document.getElementById('root')
);