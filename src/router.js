const express = require("express");

const assetsRouter = express.Router();
const counterRouter = express.Router();

const authenticate = require("./authenticate");

const screenshot = require("./screenshot");
const wallpaper = require("./wallpaper");
const template = require("./templates");
const counter = require("./counter");

// assets
assetsRouter.get("/", template.assets);

// wallpaper
assetsRouter.get("/wallpaper", template.wallpaper);
assetsRouter.get("/wallpaper/:name", wallpaper);

// screenshot
assetsRouter.get("/screenshot", template.screenshot);
assetsRouter.get("/screenshot/:name", screenshot);

// counter
counterRouter.post("/", counter.set);
counterRouter.use(authenticate);
counterRouter.get("/", counter.get);
counterRouter.delete("/", counter.reset);
counterRouter.get("/ips", counter.getIPs);

module.exports = { assets: assetsRouter, counter: counterRouter };
