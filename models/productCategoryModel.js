const mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Defining Schema
const productCategoryRelationSchema = new Schema({
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "categories",
    required: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "products",
    required: true,
  },
});

const productCategoryRelationModel = mongoose.model(
  "productcategoryrelation",
  productCategoryRelationSchema
);
module.exports = productCategoryRelationModel;
