const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  name: String,
  city: String,
  phone: Number,
});

module.exports = new mongoose.model("datas", DataSchema);
