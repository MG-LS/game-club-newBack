const Cats = require("../models/Category.model");

module.exports.catsController = {
  addCats: async (req, res) => {
    try {
      await Cats.create({
        name: req.body.name,
      });
      res.json("added");
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },
  getCats: async (req, res) => {
    try {
      const getCat = await Cats.find();
      res.json(getCat);
    } catch (e) {
      res.json(e.toString());
    }
  },
};
