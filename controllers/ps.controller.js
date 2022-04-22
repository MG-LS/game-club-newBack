const Ps = require("../models/Ps.model");

module.exports.psController = {
  addPs: async (req, res) => {
    try {
      const ps = await Ps.create({
        name: req.body.name,
        boolean: req.body.boolean,
        user: req.body.user,
      });
      res.json(ps);
    } catch (error) {
      console.log(error.message);
    }
  },
  deletePs: async (req, res) => {
    try {
      await Ps.findByIdAndDelete(req.params.id);
      res.json("Место удалено");
    } catch (err) {
      console.log(`${err} Ошибка при удалении ps места`);
    }
  },
  getPs: async (req, res) => {
    try {
      const getPs = await Ps.find();
      res.json(getPs);
    } catch (e) {
      res.json(e.toString());
    }
  },
  changePs: async (req, res) => {
    try {
      const chan = await Ps.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        boolean: req.body.boolean,
        user: req.body.user,
      });
      res.json(chan);
    } catch (err) {
      console.log({ error: "Ошибка при изменении ps места" });
    }
  },
};
