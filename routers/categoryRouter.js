const express = require("express");
const router = express.Router();
const { categoryController } = require("../controllers");

router
  .post("/creatCategory", categoryController.createCategory)
  .get("/getCategory", categoryController.categorieList);

module.exports = router;
