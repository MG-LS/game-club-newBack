const { Router } = require("express");

const { userController } = require("../controllers/users.controller");

const router = Router();

router.post("/users", userController.registerUser);
router.post("/login", userController.login);
router.get("/users", userController.getAllUser);
// router.patch("/users/:id", userController.changeUser);
// router.delete("/users/:id", userController.deleteUser);

module.exports = router;
