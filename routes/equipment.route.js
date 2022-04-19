const { Router } = require("express");
const { equipmentController } = require("../controllers/equipment.controller");

const router = Router();

router.post("/equipment", equipmentController.createEquipment);
router.get("/equipment", equipmentController.getEquipment);

module.exports = router;