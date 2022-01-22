const express = require("express");
const assetsRouter = express.Router();
const counterRouter = express.Router();

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
counterRouter.get("/", counter.get);
counterRouter.post("/", counter.set);
counterRouter.delete("/", counter.reset );
counterRouter.get("/ips", counter.getIPs );

module.exports = { assets: assetsRouter, counter: counterRouter };
