const {Router} = require("express");
const UserController = require("../controllers/UserController");

const checkUsersExists = require("../middlewares/checkUsersExists");

const userRoutes = Router();
const userController = new UserController();

//----------------------------------------------------------------------------//

userRoutes.post("/users", userController.createUser);

userRoutes.get("/users", userController.listUser);

userRoutes.get("/users/:user_id", checkUsersExists, userController.listUserById);

userRoutes.put("/users/:user_id", checkUsersExists, userController.updateUser);

//userRoutes.patch("/users/status/:id", checkUsersExists, userController.updateUserStatus);

userRoutes.delete("/users/:user_id", checkUsersExists, userController.deleteUser);

//-------------------------------------------------------------------------------//

module.exports = userRoutes;