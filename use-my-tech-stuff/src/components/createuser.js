import React, {useState} from 'react'


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
        const {name, value} = evt.target
        setFormValues({...formValues, [name]:value});
    }

    return(

    <form onSubmit={onSubmit}>
        <label>Username
            <input 
            type= "text"
            onChange={onChange}
            value= {formValues.username}
            name= "username"
            />
        </label>
        <label>Email
            <input 
            type= "text"
            onChange={onChange}
            value= {formValues.email}
            name= "email"
            />
        </label>
        <label>Password
            <input 
            type= "password"
            onChange={onChange}
            value= {formValues.password}
            name= "password"
            />
        </label>
        <button>Submit</button>
    </form>
    
    )


}

