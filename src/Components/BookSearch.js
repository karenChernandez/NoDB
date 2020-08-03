import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Book extends Component{
    constructor(){
        super()


        this.state = {
            bookList: [],
            title: '',

        }
    }

    componentDidMount = () => {
        axios.get('/api/bookForSale').then(results => {
            // console.log(results)
            // this.setState({ bookList: results.data.results.books })
        })
    }
    // handleSubmit=()=>{
    //     axios.get(`https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=LGEoPloheVDZRyadhO2j6U8lbMl8YDBI&title=${this.state.title}`).then(results=>{
    //     console.log('RESULTS',results)    
    //     this.setState({bookList: results.data.results})
    //     })
    // }
    render(){
        console.log('what is state?', this.state.bookList)
        // let mappedBooks = this.state.bookList.map(book => {
        //     return <div key={book.primary_isbn10}><Link to='/Display'><img src={book.book_image} /></Link></div>
        // })
        return <div>
            <h1>🔎</h1>
            <input placeholder='Search'></input>
            <button onClick={()=>this.handleSubmit()}>Submit</button>
            {/* {mappedBooks} */}
            

        </div>

    }

    
}
export default Book;