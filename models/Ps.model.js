const mongoose = require("mongoose");

const psSchema = mongoose.Schema({
  name: String,
  boolean: {
    type: Boolean,
    default: false,
  },
  user: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Ps = mongoose.model("Ps", psSchema);

module.exports = Ps;
