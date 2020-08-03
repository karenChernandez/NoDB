import React from 'react';
import {Link} from 'react-router-dom';


function Search(){


    return <div className='searchComponent'>
        <nav>
            <ul>
                <li>
                    <Link to='/Display'>🔎Search</Link>
                </li>
            </ul>
        </nav>
       
    </div>
        
    
}

export default Search;