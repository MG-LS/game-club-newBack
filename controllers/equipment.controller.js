const Equipment = require("../models/Equipment.model");
const jwt = require("jsonwebtoken");

module.exports.equipmentController = {
  getEquipment: async (req, res) => {
    try {
      const eq = await Equipment.find();
      res.json(eq);
    } catch (err) {
      return res.json({ error: "Ошибка при выводе ОБР" });
    }
  },

  createEquipment: async (req, res) => {
    try {
        const { title, armchair, img, paraphernalia, processor, monitor } = req.body;

        const eq = await Equipment.create({
          armchair: armchair,
          img: img,
          title: title,
          paraphernalia: paraphernalia,
          processor: processor,
          monitor: monitor,
        });

      return res.json(eq);
    } catch (err) {
      res.status(401).json("Неудалось добавить OБР");
    }
  },

};
