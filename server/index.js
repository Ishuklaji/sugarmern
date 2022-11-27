const express = require("express");
const connection = require("./config/db.js");

const {
  signup,
  login,
  userLoggedIn,
} = require("./controllers/user.controller.js");
const productRouter = require("./routes/product.routes");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    message: "welcome",
  });
});

app.use("/api/products", productRouter);

app.post("/signup", signup);

app.post("/login", login);

app.get("/userLoggedIn", userLoggedIn);

app.listen(8080, () => {
  try {
    connection();
    console.log("listening on port 8080");
  } catch (error) {
    console.log(error);
  }
});
