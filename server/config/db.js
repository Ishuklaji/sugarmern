const mongoose = require("mongoose");

const connection = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/sugar-cosmetics");
  console.log("Connection done");
};

module.exports = connection;
