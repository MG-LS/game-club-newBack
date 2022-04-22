const Vip = require("../models/Vip.model");

module.exports.vipController = {
  addVip: async (req, res) => {
    try {
      const vip = await Vip.create({
        name: req.body.name,
        boolean: req.body.boolean,
        user: req.body.user,
      });
      res.json(vip);
    } catch (error) {
      console.log(error.message);
    }
  },
  deleteVip: async (req, res) => {
    try {
      await Vip.findByIdAndDelete(req.params.id);
      res.json("Место удалено");
    } catch (err) {
      console.log(`${err} Ошибка при удалении vip места`);
    }
  },
  getVip: async (req, res) => {
    try {
      const vip = await Vip.find();
      res.json(vip);
    } catch (e) {
      res.json(e.toString());
    }
  },
  changeVip: async (req, res) => {
    try {
      const chan = await Vip.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        boolean: req.body.boolean,
        user: req.body.user,
      });
      res.json(chan);
     
    } catch (err) {
      console.log({ error: "Ошибка при изменении vip места" });
    }
  },
};
