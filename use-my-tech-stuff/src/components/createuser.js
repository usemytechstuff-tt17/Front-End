import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const StyleDiv = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:left;
    background-color:white;
    width:30rem;
    padding: 6rem;
    margin:auto;
    margin-top:5rem;
    border-radius: 8px;
    box-shadow: -8px 8px #385898;
    input{
        margin:5px;
    }
    h1{
        font-size:3rem;
        color:black;
    }
`
const initialFormValues= {
    username: '',
    email: '',
    password: '',
}


export default function CreateUser() {

    const {push} = useHistory()
    
    const [formValues, setFormValues] = useState(initialFormValues);


    const submitRegister = (value) => {

		axios.post('https://usemytechstuff.herokuapp.com/api/users/register', value)
			.then(res => {
				console.log(res);
                push('/login')
			})
			.catch(err => {
				console.log(err.response);
			})
	}

    const onSubmit = (evt) => {
        evt.preventDefault();
        submitRegister(formValues);
    }

    const onChange = (evt) => {
        const {name, value} = evt.target
        setFormValues({...formValues, [name]:value});
    }

    return(
        <StyleDiv className="container">
        <h1>Create User</h1>
        <form onSubmit={onSubmit}>
            <TextField 
            margin="normal"
            label="Username"
            variant="outlined"
            placeholder="Username"
            onChange={onChange}
            value= {formValues.username}
            name= "username"
            />
            <TextField
            margin="normal"
            label="Email"
            variant="outlined"
            placeholder="Email"
            onChange={onChange}
            value= {formValues.email}
            name= "email"
            />
            <TextField
            margin="normal"
            type= "password"
            onChange={onChange}
            value= {formValues.password}
            name= "password"
            variant="outlined"
            placeholder="Password"
            label="Password"
            />
        <Button type='submit' variant= "contained">Submit</Button>
    </form>
    </StyleDiv>
    )


}

