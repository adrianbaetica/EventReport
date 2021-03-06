const mongoose = require("mongoose");

const Photo = mongoose.model(
  "Photo",
  new mongoose.Schema({
    name: String,
    path: String,
    type: String,
  })
);

module.exports = Photo;
