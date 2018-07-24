const mongoose = require("mongoose");

const Dog = new mongoose.Schema({
  hairColor: String,
  breed: { type: String, required: true, default: "Pug" },
  // owners: [{ type: mongoose.Types.ObjectId, ref: "People" }],
  name: String,
  age: { type: Number, min: 0 },
  sex: { type: String, required: true, enum: ["Male", "Female"] }
});

module.exports = mongoose.model("Dog", Dog);
