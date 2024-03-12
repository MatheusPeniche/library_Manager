const {Router} = require("express");
const bookRoutes = require("./book.routes");
const userRoutes = require("./user.routes");
const loanRoutes = require("./loan.routes");
const routes = Router()

routes.use("/books", bookRoutes)
routes.use("/users", userRoutes)
routes.use("/emprestimo", loanRoutes)
module.exports = routes