import React, { useState ,useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../contexts/userContext';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'

import {Link} from 'react-router-dom'


const useStyles = makeStyles({
	root: {
	 display: 'flex',
	 justifyContent:'center',
	 flexDirection:'column',
	  background: 'white',
	  borderRadius: '18px',
	  color: 'white',
	  boxShadow: '-8px 8px #385898',
	  border:'1px solid black',
	  width:'30rem',
	  margin:'auto',
	  height:'30rem',
	  marginTop:'5rem'
	},
	h1:{
        alignContent:'center',
	},
	form:{
		display: 'flex',
		flexWrap:'wrap',
		flexDirection:'column',
		justifyContent:'center',
		alignItems:'center',
	},
	textform:{
		padding:'10px',
	},
	button:{
    backgroundColor:'#385898',
	width:'10rem',
	marginBottom:'2%',
	}
  });

export default function LoginForm() {
	const classes = useStyles();

	const initialValue = {  username:'', password: '' };
	const [userValue, setUserValue] = useState(initialValue);
	const { setLocalId , setIsLoggedIn} = useContext(UserContext);

	const handleChange = (evt) => {
		const{name, value}=evt.target;
		setUserValue({...userValue, [name]:value})
	};

	const {push} = useHistory();
	
	const submitLogin = (value) => {
		axios.post('https://usemytechstuff.herokuapp.com/api/users/login', value)
		.then(res => {
			setLocalId(res.data.user_id);
			setIsLoggedIn(res.data.token);
			push('/')
		})
		.catch(err => {
			console.log(err.response)
		})
	}
	
	const onSubmit = (evt) => {
		evt.preventDefault();
		submitLogin(userValue);
	}
	
	return (
		<div className={classes.root}>
			<h1 className={classes.h1}>Log In</h1>
		
			<form onSubmit={onSubmit} className={classes.form} >
				<TextField
						className={classes.textform}
						variant="outlined"
						type='text'
						onChange={handleChange}
						value={userValue.username}
						placeholder='username...'
						name="username"
				/>
				<TextField
				    className={classes.textform}
					type='password'
					value={userValue.password}
					onChange={handleChange}
					placeholder='password...'
					name="password"
					variant="outlined"
				/>
		  <Button className={classes.button} type='submit' variant= "contained" >Log In</Button>
		  <Link to='/Register'>
		  <Button className={classes.button}>Register</Button>
		  </Link>
			</form>
		</div>
	);
}
