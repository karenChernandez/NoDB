import React from 'react';
import {Link}from 'react-router-dom';




function Book(props){

    console.log('PROPS', props)



return<div className='bookDisplay'>
    <div className='bookComponent' key={props.isbn10}><Link to='/DetailBook'>
        <img src={props.book_image}/>
    </Link>
    
    <section className='priceButton'>
        {/* conditional rendering use for buttons on Display Component and Cart Component */}
            {props.handleAddBook ? 
            <button className='CartButton' onClick={()=>props.handleAddBook(props)}>Add to Cart</button>
            :
            <button className='CartButton' onClick={() => props.handleDelete(props.isbn)}>Delete</button>
                
        }
        <h3 className='PriceBookComponent'>Price: ${props.price}</h3>
            </section>
            
    </div>
    

</div>


    


}

export default Book;