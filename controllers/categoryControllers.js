const categoryModel = require("../models/categoryModel");

const createCategory = async (req, res) => {
  const body = req.body;
  try {
    const categorie = await categoryModel.create(body);

    return res
      .status(200)
      .json({ data: categorie, message: "add new product" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const categorieList = async (req, res) => {
  try {
    const categorie = await categoryModel.find();
    return res
      .status(200)
      .json({ data: categorie, message: "all category list" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
module.exports = { createCategory, categorieList };
