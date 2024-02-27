const exprees = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = exprees();
// const port = 3000;

app.use(bodyParser.json());
console.log("CONNECTION_URL :::>>", process.env.PORT);

console.log("CONNECTION_URL :::>>", process.env.CONNECTION_URL);

mongoose.connect(process.env.CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected monodb");
});

db.on("error", (err) => {
  console.error("MonoDB connection error", err);
});
