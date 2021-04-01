import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {CssBaseline} from '@material-ui/core/'

import { BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
	<Router>
		<CssBaseline />
		<App/>
	</Router>,
	document.getElementById('root')
);