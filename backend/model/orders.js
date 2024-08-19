const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  orderedAt: {
    type: Date,
    default: new Date(),
  },
  userData: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone_number: {
      type: Number,
      required: true,
    },
  },
  addressData: {
    line1: {
      type: String,
      required: true,
    },
    line2: {
      type: String,
      required: true,
    },
    postal_code: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  productsData: [
    {
      productDetails: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      totalPrice: {
        type: Number,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Order", ordersSchema);
