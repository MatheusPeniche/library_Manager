const {Router} = require("express");
const BookController = require("../controllers/BookController");

const checkBooksExists = require("../middlewares/checkBooksExists");

const BookRoutes = Router();
const bookController = new BookController();

//----------------------------------------------------------------------------//

BookRoutes.post("/", bookController.createBook);

BookRoutes.get("/", bookController.listBook);

BookRoutes.get("/:id", checkBooksExists, bookController.listBookById);

BookRoutes.put("/:id", checkBooksExists, bookController.updateBook);

BookRoutes.patch("/status/:id", checkBooksExists, bookController.updateBookStatus);

BookRoutes.delete("/:id", checkBooksExists, bookController.deleteBook);

//-------------------------------------------------------------------------------//

module.exports = BookRoutes;