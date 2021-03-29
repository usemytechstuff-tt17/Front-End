import React, {useState} from 'react'


const intialFormValues= {
    username: '',
    email: '',
    password: '',
}

const initialUsers=[]
export default function Create() {
    const [userInfo, setUserInfo] = useState(initialUsers);
    const [formValues, setFormValues] = useState(intialFormValues);

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

