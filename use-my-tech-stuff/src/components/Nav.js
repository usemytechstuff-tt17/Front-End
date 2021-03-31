import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
// import Logo from '../theme/UseMyTechStuffLogo.png'
import Logo from '../theme/NewLogo.png'
// import PrivateRoute from '../utils/PrivateRoute'
import styled from 'styled-components'
import { Home } from "@material-ui/icons"
import { UserContext } from '../contexts/userContext';

const NavDiv = styled.div`
    display: flex;
    /* border: 1px solid black; */
    justify-content: space-between;
    align-items: flex-end;
    /* background-color: #C4C4C4; */
    background-color:#596C56; 
    /* background-color:#116466; */
    p{
        text-align: bottom;
    }
    img{
        height:6rem;
        width:10rem;
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
const { isLoggedIn, setIsLoggedIn, localId, setLocalId } = useContext(UserContext);

const {push} = useHistory()

const logout = () => {
    handleClose();
    setIsLoggedIn(false);
    setLocalId(false);
    push('/')
}

return(
    <NavDiv className='navbar'>
        {/* <Link className="link" to="/" ><Home fontSize="large" style={{color:"black"}} /></Link> */}
        <Link className="link" to="/" src="logo"><img src={Logo} alt='Use My Tech Stuff Logo' /></Link>
        
        <nav>
            <MenuIcon onClick={handleClick} style={{ fontSize: 60 }}></MenuIcon>
            <Menu
            name="menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
                <Link style={{textDecoration:"none", color:"black"}} to="/ownerpage" ><MenuItem onClick={handleClose} >My Listings</MenuItem></Link>
                <Link style={{textDecoration:"none", color:"black"}} to="/createlisting"><MenuItem onClick={handleClose} > Create Listing</MenuItem></Link>
                {isLoggedIn && localId && <MenuItem onClick={logout} >Log Out</MenuItem>}
                {!isLoggedIn && !localId && <Link style={{textDecoration:"none", color:"black"}} to="/register" ><MenuItem onClick={handleClose} >Register</MenuItem></Link>}
                {!isLoggedIn && !localId && <Link style={{textDecoration:"none", color:"black"}} to="/login" ><MenuItem onClick={handleClose} >Log In</MenuItem></Link>}
            </Menu>
        </nav>
    </NavDiv>
    )
}

export default Nav;