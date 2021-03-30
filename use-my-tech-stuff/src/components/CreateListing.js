import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button'

const initialFormValues= {
    itemname: '',
    category: '',
    price: '',
    description: '',
}

const initialItemInfo=[]
export default function CreateListing() {
    const [itemInfo, setItemInfo] = useState(initialItemInfo);
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
        <label>Item Name
            <TextField 
            label= "Item Name"
            onChange={onChange}
            value= {formValues.itemname}
            name= "itemname"
            variant="outlined"
            placeholder="Item Name"
            />
        </label>
        <br />
        <label>Category
            <Select name="category" value={formValues.category} onChange={onChange}>
                <MenuItem value="">--Select Category--</MenuItem>
                <MenuItem value="photography">Film & Photography</MenuItem>
                <MenuItem value="television">TV's</MenuItem>
                <MenuItem value="electronics">Electronics</MenuItem>
                <MenuItem value="other">Other</MenuItem>
            </Select>
        </label>
        <br />
        <label>Price
            <TextField
            label= "Price"
            onChange={onChange}
            value= {formValues.price}
            name= "price"
            variant="outlined"
            placeholder="Price"
            />
        </label>
        <br />
        <label>Description
            <TextField
            label="Description"
            onChange={onChange}
            value= {formValues.description}
            name= "description"
            variant="outlined"
            placeholder="Description"
            multiline rows={4}
            />
        </label>
        <br />
        <Button variant= "contained">Submit</Button>
    </form>
    )


}