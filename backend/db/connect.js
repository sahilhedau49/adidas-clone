const mongoose = require("mongoose");

const connectDb = (url) => {
  console.log("Connect to Mongo DB...");
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDb;
