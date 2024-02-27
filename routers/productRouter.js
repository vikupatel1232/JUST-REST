const express = require("express");
const router = express.Router();
const { productController } = require("../controllers");

router
  .post("/createProduct", productController.createProduct)
  .get("/getProduct", productController.productList)
  .get("/getProductById/", productController.productById)
  .post("/updateProduct", productController.productUpdate)
  .delete("/deleteProduct", productController.productDelete)
  .post("/createProductCategory", productController.createProductCategory);

module.exports = router;
