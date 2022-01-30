const fs = require("fs");
const path = require("path");

const getOne = (req, res) => {
  const name = req.params.name;
  const SCREENSHOT = "/assets/screenshots/";
  const screenshotPath = path.join(__dirname, SCREENSHOT, name);
  res.download(screenshotPath);
};

const list = (_req, res) => {
  const folders = fs.readdirSync(`./assets/screenshots`);
  res.json(folders);
};

module.exports = { getOne, list };
