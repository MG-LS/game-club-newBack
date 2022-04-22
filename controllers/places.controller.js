const Place = require("../models/Place.model");

module.exports.placeController = {
  addPlace: async (req, res) => {
    try {
      const com = await Place.create({
        name: req.body.name,
        boolean: req.body.boolean,
        user: req.body.user,
      });
      res.json(com);
    } catch (error) {
      console.log(error.message);
    }
  },
  deletePlace: async (req, res) => {
    try {
      await Place.findByIdAndDelete(req.params.id);
      res.json("Место удалено");
    } catch (err) {
      console.log(`${err} Ошибка при удалении места`);
    }
  },
  getPlace: async (req, res) => {
    try {
      const getCat = await Place.find();
      res.json(getCat);
    } catch (e) {
      res.json(e.toString());
    }
  },
  changePlace: async (req, res) => {
    try {
      const chan = await Place.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        boolean: req.body.boolean,
        user: req.body.user,
      });
      res.json(chan);
    } catch (err) {
      console.log({ error: "Ошибка при изменении места" });
    }
  },
};
