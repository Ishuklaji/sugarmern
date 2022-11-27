const mongoose = require("mongoose");

const connection = async () => {
  await mongoose.connect(
    "mongodb+srv://dsr:dsr@cluster0.0ap9xkm.mongodb.net/sugar-cosmetics?retryWrites=true&w=majority"
  );
  console.log("Connection done");
};

module.exports = connection;
