const fs = require("fs");
const path = require("path");

const getOne = (req, res) => {
  const name = req.params.name;
  const WALLPAPER = "/assets/wallpapers/";
  const wallpaperPath = path.join(__dirname, WALLPAPER, name);
  res.download(wallpaperPath);
};

const list = (_req, res) => {
  const folders = fs.readdirSync(`./assets/wallpapers`);
  res.json(folders);
};

module.exports = { getOne, list };
