import React, {useState} from 'react'


const intialFormValues= {
    itemname: '',
    category: '',
    price: '',
    description: '',
}

const initialItemInfo=[]
export default function Create() {
    const [itemInfo, setItemInfo] = useState(initialItemInfo);
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
        <label>Item Name
            <input 
            type= "text"
            onChange={onChange}
            value= {formValues.itemname}
            name= "itemname"
            />
        </label>
          <label>Category
            <select name="category" value={formValues.category} onChange={onChange}>
                <option value="">--Select Category--</option>
                <option value="photography">Film & Photography</option>
                <option value="television">TV's</option>
                <option value="electronics">Electronics</option>
                <option value="other">Other</option>
            </select>
        </label>
        <label>Price
            <input 
            type= "text"
            onChange={onChange}
            value= {formValues.price}
            name= "price"
            />
        </label>
        <label>Description
            <input 
            type= "password"
            onChange={onChange}
            value= {formValues.description}
            name= "description"
            />
        </label>
        <button>Submit</button>
    </form>
    )


}