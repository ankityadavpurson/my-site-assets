const mongoose = require("mongoose");

function dbConnect() {
  const DEV = process.env.DEV === "1";

  const MONGODB_URL = DEV
    ? process.env.MONGODB_URL_DEV
    : process.env.MONGODB_URL_STAGING;

  mongoose.connect(MONGODB_URL, { useNewUrlParser: true }, (error) => {
    if (error) console.log(error);
    else console.log("MongoDB connected :)");
  });
}

module.exports = dbConnect;
