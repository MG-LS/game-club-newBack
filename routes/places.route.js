const { Router } = require("express");

const { placeController } = require("../controllers/places.controller");

const router = Router();

router.post("/place", placeController.addPlace);
router.get("/place", placeController.getPlace);
router.patch("/place/:id", placeController.changePlace);
router.delete("/place/:id", placeController.deletePlace);

module.exports = router;
