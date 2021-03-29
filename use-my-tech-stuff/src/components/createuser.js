import React, {useState} from 'react'


const intialFormValues= {
    username: '',
    email: '',
    password: '',
}

const initialUsers=[]
export default function CreateUser() {
    const [userInfo, setUserInfo] = useState(initialUsers);
    const [formValues, setFormValues] = useState(intialFormValues);

    const onSubmit = (evt) => {
        evt.preventDefault();

    }

    const OnChange = (evt) => {
        const {name, value} = evt.target
        setFormValues({...formValues, [name]:value});
    }

    return(

    <form onSubmit={onSubmit}>
        <label>Username
            <input 
            type= "text"
            onChange={OnChange}
            value= {formValues.username}
            name= "username"
            />
        </label>
        <label>Email
            <input 
            type= "text"
            onChange={OnChange}
            value= {formValues.email}
            name= "email"
            />
        </label>
        <label>Password
            <input 
            type= "password"
            onChange={OnChange}
            value= {formValues.password}
            name= "password"
            />
        </label>
        <button>Submit</button>
    </form>
    )


}

