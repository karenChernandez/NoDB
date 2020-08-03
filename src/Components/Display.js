import React, { Component } from 'react';
import axios from 'axios';
import Book from './Book';
import DetailBook from './DetailBook';


class Display extends Component{
    constructor(){
        super()


        this.state={
            bookList:[]
        }
    }

    componentDidMount=()=>{
        axios.get('/api/books').then(results=>{
            console.log('RESULTS', results)
            this.setState({ bookList: results.data})
        })
    }
    //component Book is sending props(the entire object)to the function handleAddBook.
    handleAddBook = (book)=>{
        axios.post('/api/cart', {
            book: book
        })
    }
    render(){
        console.log('what is state?', this.state.bookList)
        let mappedBooks=this.state.bookList.map(book=>{
            return <div className='bookDisplay'>
                <Book {...book} handleAddBook={this.handleAddBook}/>

            </div>
        })
        return <div className='book'>
        
        {mappedBooks}

    </div>
       
}
}


export default Display;