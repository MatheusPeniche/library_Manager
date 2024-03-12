const {Router} = require("express");
const UserController = require("../controllers/UserController");

const checkUsersExists = require("../middlewares/checkUsersExists");

const userRoutes = Router();
const userController = new UserController();

//----------------------------------------------------------------------------//

userRoutes.post("/", userController.createUser);

userRoutes.get("/", userController.listUser);

userRoutes.get("/:user_id", checkUsersExists, userController.listUserById);

userRoutes.put("/:user_id", checkUsersExists, userController.updateUser);

//userRoutes.patch("/users/status/:id", checkUsersExists, userController.updateUserStatus);

userRoutes.delete("/:user_id", checkUsersExists, userController.deleteUser);

//-------------------------------------------------------------------------------//

module.exports = userRoutes;