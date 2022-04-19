const { Router } = require("express");
const { catsController } = require("../controllers/categoryies.controller");

const router = Router();

router.post("/cats", catsController.addCats);
router.get("/cats", catsController.getCats);

module.exports = router;
