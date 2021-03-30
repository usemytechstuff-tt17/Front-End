import React from 'react';
import { Link } from 'react-router-dom';

import PrivateRoute from '../utils/PrivateRoute'

import Logo from '../theme/UseMyTechStuffLogo.png'

const Nav = () => {

return(
    <div className='navbar'>
        <img src={Logo} alt='Use My Tech Stuff Logo' />
        <p>Connecting people in need to people with Greed!</p>
        <nav>
            <ul>
                <li>
                    <Link to='/' >Home</Link>
                </li>
                <li>
                    <Link to='/ownerpage'>Your Items</Link>
                </li>
                <li>
                    <Link to='/createListing' />
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
            </ul>
        </nav>
    </div>
    )
}

export default Nav;