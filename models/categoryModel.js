const mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Defining Schema
const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      trim: true,
    },
    trending: {
      type: Number,
      required: true,
      trim: true,
    },
    ordering: {
      type: Number,
      required: true,
      trim: true,
    },
    inFocus: {
      type: Boolean,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      required: true,
      default: false,
    },
    createdAt: {
      type: Number,
    },
    updatedAt: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const categoryModel = mongoose.model("category", categorySchema);

module.exports = categoryModel;
