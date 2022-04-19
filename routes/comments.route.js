const { Router } = require("express");

const { commentController } = require("../controllers/comments.controller");
const authMiddleware = require("../models/middlewares/auth.middleware");

const router = Router();

router.post("/comment", authMiddleware, commentController.addComment);
router.delete("/comment/:id", authMiddleware, commentController.deleteComment);
router.get("/comment", authMiddleware, commentController.getComment);

module.exports = router;
