import React from 'react';
import {Link} from 'react-router-dom';



function Menu(){


    return<header className='menuComponent'>
        <nav >
            <ul className='menuLinks'>
                <li className='homeLink'>
                    <Link to='/'>Home</Link>
                    
                </li>

                <li>
                    <Link to="/Admin">Admin</Link>
                </li>
                <li className='cartIcon'>
                    <Link to="/Cart">🛒</Link>
                    
                </li>
            </ul>
        </nav>
        
        
        
    </header>
    
}

export default Menu;