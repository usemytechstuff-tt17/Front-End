import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../theme/UseMyTechStuffLogo.png'
// import PrivateRoute from '../utils/PrivateRoute'
import styled from 'styled-components'
import { Home } from "@material-ui/icons"

const NavDiv = styled.div`
    display: flex;
    border: 1px solid black;
    justify-content: space-between;
    align-items: flex-end;
    background-color: #C4C4C4;
    p{
        text-align: bottom;
    }
    img{
        height:5rem;
    }
    .link{
        text-decoration:none;
    }

`

const Nav = () => {

const [anchorEl, setAnchorEl] = useState(null);

const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
};

const handleClose = () => {
    setAnchorEl(null);
};
return(
    <NavDiv className='navbar'>
        <Link className="link" to="/" ><Home fontSize="large" style={{color:"black"}} /></Link>
        <img src={Logo} alt='Use My Tech Stuff Logo' />
        <p>Connecting people in need to people with Greed!</p>
        <nav>
            <MenuIcon onClick={handleClick} style={{ fontSize: 40 }}></MenuIcon>
            <Menu
            name="menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
                <MenuItem onClick={handleClose} ><Link style={{textDecoration:"none", color:"black"}} to="/protected" >My Listings</Link></MenuItem>
                <MenuItem onClick={handleClose} ><Link style={{textDecoration:"none", color:"black"}} to="/createlisting"> Create Listing</Link></MenuItem>
                <MenuItem onClick={handleClose} ><Link style={{textDecoration:"none", color:"black"}} to="/register" >Register</Link></MenuItem>
                <MenuItem onClick={handleClose} ><Link style={{textDecoration:"none", color:"black"}} to="/login" >Log In</Link></MenuItem>
            </Menu>
        </nav>
    </NavDiv>
    )
}

export default Nav;