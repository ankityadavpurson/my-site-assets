const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const { assets, counter, visitorEntry } = require("./src/router");
const { home } = require("./src/templates");
const dbConnect = require("./src/db");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const ORIGINS = JSON.parse(process.env.ORIGINS || "*");
app.use(cors({ origin: ORIGINS }));

const DEV = process.env.DEV === "1";
if (DEV) app.use(logger("dev"));

app.get("/", home);
app.use("/assets", assets);
app.use("/counter", counter);
app.use("/visitor-entry", visitorEntry);

dbConnect();

module.exports = app;
