require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const Product = require("./model/product");
const Order = require("./model/orders");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (res, req) => {
  req.json({
    msg: "Server is live...",
  });
});

app.post("/", async (req, res) => {
  const data = req.body;
  try {
    await Product.insertMany([data]);
  } catch (error) {
    console.log(error.message);
    res.json({
      msg: "POST method failed...",
    });
    return;
  }
  res.json({
    msg: "Data posted...",
  });
});

// Get data with querry
app.get("/products", async (req, res) => {
  const cat = req.query.category;
  let data = await Product.find({ category: cat });
  res.json(data);
});

// Get all data
app.get("/products/all", async (req, res) => {
  let data = await Product.find();
  res.json(data);
});

// Get product by id
app.get("/product/:id", async (req, res) => {
  let data = await Product.findById(req.params.id);
  res.json(data);
});

// Checkout api
app.post("/create-checkout-session", async (req, res) => {
  const { products, addressData } = req.body;

  const productsData = products.map((prod) => ({
    productDetails: prod._id,
    quantity: prod.quantity,
    totalPrice: prod.totalPrice,
  }));

  const orderData = {
    addressData: addressData,
    productsData: productsData,
  };

  try {
    await Order.insertMany([orderData]);
  } catch (error) {
    res.json({ error: error });
    return;
  }

  const lineItems = products.map((prod) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: prod.name,
      },
      unit_amount: prod.price * 100,
    },
    quantity: prod.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: `${process.env.DOMAIN_URL}/success`,
    cancel_url: `${process.env.DOMAIN_URL}/cancel`,
  });

  res.json({ id: session.id });
});

app.listen(PORT, async () => {
  await connectDB(process.env.MONGODB_URL);
  console.log("Sever started on port ", PORT);
});
