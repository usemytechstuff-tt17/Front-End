import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
const StyleDiv = styled.div`
    /* display:flex;
    flex-direction: column;
    justify-content:left;
    align-items:flex-start; */
    background-color:#B28869;
    border:1px solid white;
    color:white;
`

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

    const classes = useStyles();
    const onSubmit = (evt) => {
        evt.preventDefault();

    }

    const onChange = (evt) => {
        const {name, value} = evt.target
        setFormValues({...formValues, [name]:value});
    }

    return(
    <StyleDiv>
    <form onSubmit={onSubmit}>
        <label>
            <TextField 
            label= "Item Name"
            onChange={onChange}
            value= {formValues.itemname}
            name= "itemname"
            variant="outlined"
            placeholder="Item Name"
            margin="normal"
            />
        </label>
        <br />
        <label>
        <FormControl className={classes.formControl}>
            <InputLabel id="category">Category</InputLabel>
            <Select labelId="category" name="category" value={formValues.category} onChange={onChange} >
                <MenuItem value="">--Select Category--</MenuItem>
                <MenuItem value="photography">Film & Photography</MenuItem>
                <MenuItem value="television">TV's</MenuItem>
                <MenuItem value="electronics">Electronics</MenuItem>
                <MenuItem value="other">Other</MenuItem>
            </Select>
        </FormControl>
        </label>
        <br />
        <label>
            <TextField
            label= "Price"
            onChange={onChange}
            value= {formValues.price}
            name= "price"
            variant="outlined"
            placeholder="Price"
            margin="normal"
            />
        </label>
        <br />
        <label>
            <TextField
            label="Description"
            onChange={onChange}
            value= {formValues.description}
            name= "description"
            variant="outlined"
            placeholder="Description"
            multiline rows={4}
            margin="normal"
            />
        </label>
        <br />
        <Button variant= "contained" type="submit">Submit</Button>
    </form>
    </StyleDiv>
    )


}