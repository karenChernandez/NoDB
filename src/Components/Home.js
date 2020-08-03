import React from 'react';
import {Link} from 'react-router-dom'

function Home(){



    return<div className='homeComponent'>
        <h1 className='homePageTitle'> Welcome to my Book Store App</h1>
        
        
            
                
    <Link to="/Display" className='shopNowButton'>Shop Now!!</Link>
                
            
        
        

    </div>
    
}

export default Home;