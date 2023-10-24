require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const Product = require("./model/product");
const cors = require("cors");

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

app.listen(PORT, async () => {
  await connectDB(process.env.MONGODB_URL);
  console.log("Sever started on port ", PORT);
});
