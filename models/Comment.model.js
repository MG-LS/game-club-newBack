const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  text: String,
  user: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
  },
  news: {
    ref: "News",
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
