import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';

const initialFormValues= {
    username: '',
    email: '',
    password: '',
    owner:false
}

const initialUsers=[]
export default function CreateUser() {
    const [userInfo, setUserInfo] = useState(initialUsers);
    const [formValues, setFormValues] = useState(initialFormValues);

    const onSubmit = (evt) => {
        evt.preventDefault();

    }

    const onChange = (evt) => {
        const {name, value, checked, type} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        setFormValues({...formValues, [name]:valueToUse});
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
        <label>Owner?
            <Checkbox
            name="owner"
            type="checkbox"
            checked={formValues.owner}
            onChange={onChange}
            />
        </label>
        <br/>
        <button>Submit</button>
    </form>
    
    )


}

