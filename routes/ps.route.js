const { Router } = require("express");

const { psController } = require("../controllers/ps.controller");

const router = Router();

router.post("/ps", psController.addPs);
router.get("/ps", psController.getPs);
router.patch("/ps/:id", psController.changePs);
router.delete("/ps/:id", psController.deletePs);

module.exports = router;
