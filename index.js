const express = require("express");
require("./config/connection");
const cors = require("cors"); // Import the cors middleware
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
const { productRouter, categoryRouter } = require("./routers");

app.use("/product", productRouter);
app.use("/category", categoryRouter);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
