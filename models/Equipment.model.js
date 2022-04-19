const mongoose = require("mongoose");

const equipmentSchema = mongoose.Schema({
  img: String,
  title: String,
  processor: String,
  paraphernalia: String,
  monitor: String,
  armchair: String,
});

const Equipment = mongoose.model("Equipment", equipmentSchema);

module.exports = Equipment;
