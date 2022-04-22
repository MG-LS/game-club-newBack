const mongoose = require("mongoose");

const vipSchema = mongoose.Schema({
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

const Vip = mongoose.model("Vip", vipSchema);

module.exports = Vip;
