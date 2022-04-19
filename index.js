const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const path = require("path");
require("dotenv").config();
//жижжг галнаш дез
app.use(cors());
app.use(express.json());
app.use("/image", express.static(path.resolve(__dirname, "image")));
app.use(require("./routes/users.route"));
app.use(require("./routes/news.route"));
app.use(require("./routes/comments.route"));
app.use(require("./routes/category.route"));
app.use(require("./routes/equipment.route"));

mongoose
  .connect(process.env.URL)
  .then(() => console.log("Connected"))
  .catch(() => "Error");

app.listen(process.env.PORT, () => {
  console.log("Connecting...");
});
