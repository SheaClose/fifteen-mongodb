const Dog = require("./Dog");
// {
//   hairColor: String,
//   breed: { type: String, required: true, default: "Pug" },
//   owners: [{ type: mongoose.Types.ObjectId, ref: "People" }],
//   name: String,
//   age: { type: Number, min: 0 },
//   sex: { type: String, required: true, enum: ["Male", "Female"] }
// }
module.exports = {
  create(req, res) {
    new Dog(req.body).save((err, val) => {
      if (err) return res.status(500).json(err);
      else return res.status(200).json(val);
    });
  },
  getDog(req, res) {
    console.log("req.query: ", req.query);
    Dog.find(req.query, (err, val) => {
      if (err) return res.status(500).json(err);
      else return res.status(200).json(val);
    });
  },
  update(req, res) {
    Dog.findByIdAndUpdate(req.params.id, req.body, (err, val) => {
      if (err) return res.status(500).json(err);
      else return res.status(200).json(val);
    });
  }
};
