import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

ReactDOM.render(
	<Router>
		<Switch>
			<Route path='/login' /* component={} */ />
			<Route path='/register' /* component={Createuser} */ />
			<PrivateRoute path='' /* component={} */ />
			<Route exact path='/' component={App} />
		</Switch>
	</Router>,
	document.getElementById('root')
);
