const books = require('../books.json')

module.exports ={
    getBooks:(req, res)=>{
        console.log('?', books)
        res.status(200).send(books)
        
    },
    updateBooks:(req, res)=>{
        console.log('Update', req.params, req.body )
        let index= books.findIndex(book =>{
            console.log('book.isbn', book.isbn)
            return (book.isbn10 === req.params.isbn)
        })
        if(index !== -1){
            books[index].price= req.body.price
        }
        console.log('oo', index)
        
        res.status(200).send(books)

    }
}