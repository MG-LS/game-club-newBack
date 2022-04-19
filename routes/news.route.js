const { Router } = require("express");

const { newsController } = require("../controllers/news.controller");
const authMiddleware = require("../models/middlewares/auth.middleware");

const router = Router();

router.get("/news", authMiddleware, newsController.getNews);
router.get("/news/:id", authMiddleware, newsController.getNewsById);
router.post("/news", authMiddleware, newsController.createNews);
router.delete("/news/:id", authMiddleware, newsController.deleteNews);
// router.patch("/todos/:id", todoController.changeTodo);

module.exports = router;
