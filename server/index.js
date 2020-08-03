const express = require('express');
const bookController = require('./controllers/books');
const cartController = require('./controllers/cart');
const app= express();
const port = 4005;

app.use(express.json());

// app.get("/api/books", (req, res) => {
//     console.log("LOOOOOOL");
//     res.status(200).send("books")
// })
app.get("/api/books", bookController.getBooks)
app.put("/api/books/:isbn", bookController.updateBooks)

//******************************   Cart endpoint    ************************* */

app.post("/api/cart", cartController.addToCart)
app.get("/api/cart", cartController.getCart)
app.delete("/api/cart/:isbn", cartController.deleteCart)

app.listen(port, () => console.log(`Server listening up on port: ${port}`))
