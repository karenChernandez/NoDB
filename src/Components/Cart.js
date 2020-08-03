import React, { Component } from 'react';
import axios from 'axios'
import Book from './Book';

class Cart extends Component{
    constructor(){
        super();

        this.state={
            cart:[]
        }
    }


componentDidMount = () => {
axios.get('/api/cart').then(results => {
console.log('RESULTS', results)
this.setState({cart:results.data})
})
}
handleDelete=(isbn)=>{
axios.delete(`/api/cart/${isbn}`)
.then(results=>{
    console.log(results)
    this.setState({cart:results.data})
})
}
handleOrder=()=>{
alert('Your transaction has been completed!')
}

render(){
console.log('what is Cart state', this.state.cart)
let mappedCart =this.state.cart.map(book=>{
    return <Book {...book} handleDelete={this.handleDelete} />
})
    return <div className='cartComponent'>
        <h1 className='ShoppingCartTitle'>Shopping Cart!</h1>

        <div className='test'>
        {mappedCart}
        </div>
        <div>
            <button  className='orderButton' onClick={()=>this.handleOrder()}>Place your Order</button>
        </div>
       

        
    </div>
    
}
}
export default Cart;