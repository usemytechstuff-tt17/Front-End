import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useHistory } from 'react-router';


const initialFormValues= {
    username: '',
    email: '',
    password: '',
}

const initialUsers=[]
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

        <form onSubmit={onSubmit}>
        <label>
            <TextField 
            label="Username"
            variant="outlined"
            placeholder="Username"
            onChange={onChange}
            value= {formValues.username}
            name= "username"
            />
        </label>
        <br />
        <label>
            <TextField
            label="Email"
            variant="outlined"
            placeholder="Email"
            onChange={onChange}
            value= {formValues.email}
            name= "email"
            />
        </label>
        <br/>
        <label>
            <TextField
            type= "password"
            onChange={onChange}
            value= {formValues.password}
            name= "password"
            variant="outlined"
            placeholder="Password"
            />
        </label>
        <br/>
        <Button type='submit' variant= "contained">Submit</Button>
    </form>
    
    )


}

