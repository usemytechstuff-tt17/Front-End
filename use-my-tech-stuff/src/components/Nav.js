import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';



import PrivateRoute from '../utils/PrivateRoute'

import Logo from '../theme/UseMyTechStuffLogo.png'
import MenuLogo from '../theme/menu.png'

const Nav = () => {

const [anchorEl, setAnchorEl] = React.useState(null);

const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
};

const handleClose = () => {
    setAnchorEl(null);
};
return(
    <div className='navbar'>
        <img src={Logo} alt='Use My Tech Stuff Logo' />
        <p>Connecting people in need to people with Greed!</p>
        <nav>
            <MenuIcon onClick={handleClick}></MenuIcon>
            <Menu
            name="menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
                <MenuItem onClick={handleClose} ><Link to="/protected" />My Listings</MenuItem>
                <MenuItem onClick={handleClose} ><Link to="/createlisting"> Create Listing</Link></MenuItem>
                <MenuItem onClick={handleClose} ><Link to="/register" >Register</Link></MenuItem>
                <MenuItem onClick={handleClose} ><Link to="/login" >Log In</Link></MenuItem>
            </Menu>

            {/* <ul>
                <li>
                    <Link to='/protected'>Your Items</Link>
                </li>
                <li>
                    <Link to='/createListing' />
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                /
                <li>
                    <Link to='/login'>Login</Link>
                </li>
            </ul> */}
        </nav>
    </div>
    )
}

export default Nav;