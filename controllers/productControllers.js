const { productModel, productCategoryRelationModel } = require("../models");

const createProduct = async (req, res) => {
  const body = req.body;
  try {
    const product = await productModel.create(body);

    return res.status(200).json({ data: product, message: "add new product" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const productList = async (req, res) => {
  try {
    let product = await productModel.find();
    return res.status(200).json({ data: product, message: "All product list" });
  } catch (error) {
    return res.status(502).json({ message: error.message });
  }
};

const productById = async (req, res) => {
  try {
    let productId = req.body.productId;
    console.log(productId);

    let product = await productModel.findById(productId);

    return res.status(200).json({ data: product, message: "product with id" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const productUpdate = async (req, res) => {
  try {
    let productId = req.body.productId;
    let product = await productModel.findByIdAndUpdate(
      { _id: productId },
      { description: "this is updated description" }
    );
    return res
      .status(200)
      .json({ data: product, message: "product updated success" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const productDelete = async (req, res) => {
  try {
    let productId = req.body.productId;
    let product = await productModel.findOneAndDelete(productId);

    return res.status(200).json({ message: "product delete sucessfully" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const createProductCategory = async (req, res) => {
  try {
    let body = req.body;
    let category = await productCategoryRelationModel.create(body);

    return res.status(200).json({
      data: category,
      message: "product category create success fully",
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  createProduct,
  productList,
  productById,
  productUpdate,
  productDelete,
  createProductCategory,
};
