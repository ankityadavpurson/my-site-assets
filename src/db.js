const mongoose = require("mongoose");

function dbConnect(prod = false) {
  const MONGODB_URL = prod
    ? process.env.MONGODB_URL_STAGING
    : process.env.MONGODB_URL_DEV;
  mongoose.connect(MONGODB_URL, { useNewUrlParser: true }, (error) => {
    if (error) console.log(error);
    else console.log("MongoDB connected :)");
  });
}

module.exports = dbConnect;
