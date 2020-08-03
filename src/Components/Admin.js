import React, { Component } from 'react';
import Axios from 'axios';


class Admin extends Component{
    constructor(){
        super();
        this.state={
            isbn:'',
            price:''
        }
    }
    handleISBN=(isbn)=>{
        console.log('??', isbn)
        this.setState({isbn:isbn})
    }
    handlePrice=(newPrice)=>{
        this.setState({price:newPrice})
    }


    handleSubmit=()=>{
        console.log('>>>>')
        Axios.put(`/api/books/${this.state.isbn}`, {
            price:this.state.price
        }).then(res=>{
        alert('Updated!')
        })
    }

    render(){

       
    return<div className='adminComponent'>
        <h1>ISBN:</h1>
        <input placeholder='ISBN#' onChange={(event)=>this.handleISBN(event.target.value)}/>
        <h1>Price:</h1>
        <input placeholder='$' onChange={(event)=>this.handlePrice(event.target.value)}/>
        <button className='admitButton button' onClick={()=>this.handleSubmit()}>Submit</button>
    </div>
    }
}
export default Admin;