import React from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';


const EditPageForm = () => {
    const { push } = useHistory();
    const { id } = useParams();

    initialState= {
        itemName: '',
        price: '',
        description: '',
        category: '',
    };

    const [editItem, setEditItem] = useState(initialState)

    // Populates the Edit Form fields with the item with id matching
    useEffect(() => {
        axios.get(`https://usemytechstuff.herokuapp.com/api/items/${id}`)
        .then(res => {
            console.log(res)
            setEditItem(res.data)
        })
        .catch(err => {
            console.log(err)
        });
    }, []);

    // Updates both state and the server with the edits
    const handleSubmit = e => {
        e.preventDefault();
        axios.put(`https://usemytechstuff.herokuapp.com/api/items/${id}`, editItem)
        .then(res => {
            console.log(res)
            // Need to setState with context state
            push(`/home`)
        })
        .catch(err => {
            console.log(err)
        });
    };

    const changeHandeler = e => {
        setEditItem({
            ...item,
            [e.target.name]: e.target.value
        });
    };

    return(
    <div>
            Edit Page Form

        <form onSubmit={handleSubmit}>
            <label>Item Name
                <input 
                type= "text"
                onChange={onChange}
                value= {formValues.itemName}
                name= "itemName"
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
            <button>Save</button>
            <button>Cancel</button>
        </form>
    </div>
    );
};

export default EditPageForm;