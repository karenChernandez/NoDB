import React from 'react';
import {Link} from 'react-router-dom'

function Home(){



    return<div className='homeComponent'>
        <body>
        <h1 className='homePageTitle'> Welcome to my Book Store App</h1>

        </body>
        
        
            
                
    <Link to="/Display" className='button'>Shop Now!!</Link>
                
            
        
        

    </div>
    
}

export default Home;