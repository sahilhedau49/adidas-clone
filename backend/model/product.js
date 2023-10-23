const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: {
      values: ["shoes", "clothing", "accessories", "fanstore"],
      message: `{VALUE} is not found`,
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
