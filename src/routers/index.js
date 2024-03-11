const {Router} = require("express");
const bookRoutes = require("./book.routes");
const userRoutes = require("./user.routes");
const routes = Router()

routes.use("/", bookRoutes)
routes.use("/", userRoutes)

module.exports = routes