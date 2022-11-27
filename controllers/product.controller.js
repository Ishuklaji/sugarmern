const productModel = require("../models/product.model.js");
// const { default: productModel } = require("../models/product.model");

async function getProductsById(req, res) {
  const { pId } = req.params;

  const product = await productModel.find({
    _id: pId,
  });

  return res.send({
    status: "success",
    data: product,
  });
}

async function getProductsPaginated(req, res) {
  try {
    let {
      search = "",
      pageSize = 10,
      page = 1,
      sortBy = "createdAt",
      sortOrder = "desc",
    } = req.query;

    const totalProducts = await productModel
      .find({
        name: {
          $regex: search,
        },
      })
      .count();

    const products = await productModel
      .find({
        name: {
          $regex: search,
        },
      })
      .sort({
        [sortBy]: sortOrder === "asc" ? 1 : -1,
      })
      .limit(pageSize)
      .skip(pageSize * (page - 1));

    return res.send({
      status: "success",
      data: {
        totalProducts,
        products,
        page,
        pageSize,
      },
    });
  } catch (err) {
    return res.status(500).send({
      status: "error",
      message: "Something went wrong",
    });
  }
}

async function createProduct(req, res) {
  const product = req.body;
  //   const { user } = req;

  //   if (!user) {
  //     return res.status(400).send({
  //       status: "error",
  //       message: "User not logged in",
  //     });
  //   }

  //   blog.author = {
  //     _id: user._id,
  //     name: user.name,
  //     image: user.image,
  //   };

  const blogData = await productModel.create(product);

  // No need to await this
  //   productModel
  //     .findByIdAndUpdate(user._id, {
  //       $inc: {
  //         blogsCount: 1,
  //       },
  //     })
  //     .then(() => {});

  return res.send({
    status: "success",
    data: blogData,
  });
}

async function getProductById(req, res) {
  const { id } = req.params;

  const blog = await productModel.findById(id);

  return res.send({
    status: "success",
    data: blog,
  });
}

module.exports = {
  getProductById,
  createProduct,
  getProductsPaginated,
  getProductsById,
};
