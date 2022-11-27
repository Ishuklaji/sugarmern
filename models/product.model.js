const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  amount: String,
  image: String,
  price: Number,
  rating: Number,
  productType: String,
  feature: String,
  formulation: String,
  conern: String,
});

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;

/*{
  "_id": {
    "$oid": "6380a504054c9303cd6aca1a"
  },
  "amount": 38,
  "image": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-c…",
  "name": "POWER CLAY PEEL OFF MASK",
  "price": 799,
  "rating": 3.8,
  "productType": "Sheet Mask",
  "feature": "Combination",
  "formulation": "Liquid",
  "conern": "Acne"
}*/
