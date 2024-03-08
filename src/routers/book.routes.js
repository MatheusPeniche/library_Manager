const {Router} = require("express");
const BookController = require("../controllers/BookController");

const checkBooksExists = require("../middlewares/checkBooksExists");

const BookRoutes = Router();
const bookController = new BookController();

//----------------------------------------------------------------------------//

BookRoutes.post("/books", bookController.createBook);

BookRoutes.get("/books", bookController.listBook);

BookRoutes.get("/books/:id", checkBooksExists, bookController.listBookById);

BookRoutes.put("/books/:id", checkBooksExists, bookController.updateBook);

BookRoutes.patch("/books/status/:id", checkBooksExists, bookController.updateBookStatus);

BookRoutes.delete("/books/:id", checkBooksExists, bookController.deleteBook);

//-------------------------------------------------------------------------------//

module.exports = BookRoutes;