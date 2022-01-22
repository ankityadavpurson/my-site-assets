const express = require("express");
const logger = require("morgan");

const hostName = require("./src/host");
const { assets, counter } = require("./src/router");
const { home } = require("./src/templates");

const app = express();

app.use(logger("dev"));

app.get("/", home);
app.use("/assets", assets);
app.use("/counter", counter);

const port = process.env.PORT || 8080;
app.listen(port, hostName(port));
