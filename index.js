require("dotenv").config();
const express = require("express"),
  app = express(),
  port = 3001,
  { json } = require("body-parser"),
  mongoose = require("mongoose"),
  { create, getDog, update } = require("./dogCtrl");

app.use(json());

mongoose.connect(
  process.env.MONGO_STRING,
  { useNewUrlParser: true }
);
// .then(console.log);
app.post("/dog", create);
app.get("/dog", getDog);
app.put("/dog/:id", update);
app.listen(port, () => console.log("listening on 3001"));
