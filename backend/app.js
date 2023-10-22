require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");

const app = express();

const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
  await connectDB(process.env.MONGODB_URL);
  console.log("Sever started on port ", PORT);
});
