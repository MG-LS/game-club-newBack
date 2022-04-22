const { Router } = require("express");

const { vipController } = require("../controllers/vips.controller");

const router = Router();

router.post("/vip", vipController.addVip);
router.get("/vip", vipController.getVip);
router.patch("/vip/:id", vipController.changeVip);
router.delete("/vip/:id", vipController.deleteVip);

module.exports = router;
