const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
    },
    number: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.methods.generateJWT = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      number: this.number,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "7d" }
  );
  return token;
};

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
