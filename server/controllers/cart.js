let cart= []

module.exports={
addToCart:(req, res)=>{
    console.log("REQ.BODY", req.body)
    const addBook ={
        isbn:req.body.book.isbn10,
        book_image:req.body.book.book_image,
        price:req.body.book.price
    }
    cart.push(addBook)
    res.status(200).send(cart)
    
},
getCart:(req, res)=>{
    // console.log('?', cart)
    res.status(200).send(cart)
    // console.log('cart', cart)
    
},
deleteCart:(req, res)=>{
    console.log('what is req.params', req.params)
    const {isbn}= req.params 
    let index = cart.findIndex(book=>{
        console.log('Book',book )
        return (book.isbn === isbn)
    })
    if(index !== -1){
        cart.splice(index,1)
    }
    res.status(200).send(cart)
    console.log('INDEX', index)
    

}
}