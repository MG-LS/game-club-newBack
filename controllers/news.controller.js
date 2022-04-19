const News = require("../models/News.model");
const jwt = require("jsonwebtoken");

module.exports.newsController = {
  getNews: async (req, res) => {
    try {
      const news = await News.find();
      res.json(news);
    } catch (err) {
      return res.json({ error: "Ошибка при выводе новостей" });
    }
  },

  createNews: async (req, res) => {
    try {
      const { text, img, title } = req.body;

      const news = await News.create({
        text: text,
        img: img,
        title: title,
      });

      return res.json(news);
    } catch (err) {
      res.status(401).json("Неудалось добавить новость");
    }
  },

  deleteNews: async (req, res) => {
    try {
      const { id } = req.params;

      const news = await News.findById(id);

      if (news.user.toString() == req.user.id) {
        await news.remove();
        return res.json("Удалено");
      }

      return req.res.status(401).json("Ошибка. Нет доступа");
    } catch (err) {
      res.status(401).json("Ошибка: " + err.toString());
    }
  },
  getNewsById: async (req, res) => {
    try {
      const news = await News.findById(req.params.id);
      res.json(news);
    } catch (err) {
      res.status(401).json("Неудалось вывести новость");
    }
  },
  //   changeTodo: async (req, res) => {
  //     try {
  //       await Todo.findByIdAndUpdate(req.params.id, {
  //         text: req.body.text,
  //         condition: req.body.condition,
  //       });
  //       res.json("Тудушка изменена");
  //     } catch (err) {
  //       console.log({ error: "Ошибка при изменении тудушки" });
  //     }
  //   },
};
