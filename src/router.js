const express = require("express");

const assetsRouter = express.Router();
const counterRouter = express.Router();
const visitorEntryRouter = express.Router();

const authenticate = require("./authenticate");

const screenshot = require("./screenshot");
const wallpaper = require("./wallpaper");
const template = require("./templates");
const counter = require("./counter");
const visitorEntry = require("./visitor-entry");

// assets
assetsRouter.get("/", template.assets);

// wallpaper
assetsRouter.get("/wallpaper", template.wallpaper);
assetsRouter.get("/wallpapers", wallpaper.list);
assetsRouter.get("/wallpaper/:name", wallpaper.getOne);

// screenshot
assetsRouter.get("/screenshot", template.screenshot);
assetsRouter.get("/screenshots", screenshot.list);
assetsRouter.get("/screenshot/:name", screenshot.getOne);

// counter
counterRouter.post("/", counter.set);
counterRouter.use(authenticate);
counterRouter.get("/", counter.get);
counterRouter.delete("/", counter.reset);
counterRouter.get("/ips", counter.getIPs);

//visitor-entry
visitorEntryRouter.post("/", visitorEntry.add);

module.exports = {
  assets: assetsRouter,
  counter: counterRouter,
  visitorEntry: visitorEntryRouter,
};
