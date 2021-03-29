import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../theme/UseMyTechStuffLogo.png'




return(

    <div className='navbar'>
        <img src={Logo} alt='Use My Tech Stuff Logo' />
        <p>Connecting people in need to people with Greed!</p>
        <nav>
            <ul>
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
            </ul>
        </nav>
    </div>


)