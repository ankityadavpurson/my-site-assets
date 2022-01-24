const express = require("express");
const cors = require("cors");

const hostName = require("./src/host");
const { assets, counter } = require("./src/router");
const { home } = require("./src/templates");
const dbConnect = require("./src/db");

const app = express();
app.use(cors());

app.get("/", home);
app.use("/assets", assets);
app.use("/counter", counter);

dbConnect(true);

const port = process.env.PORT || 8080;
app.listen(port, hostName(port));
