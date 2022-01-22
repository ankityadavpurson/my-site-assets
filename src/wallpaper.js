const path = require("path");

const wallpaper = (req, res) => {
  const name = req.params.name;
  const WALLPAPER = "/assets/wallpapers/";
  const wallpaperPath = path.join(__dirname, WALLPAPER, name);
  res.download(wallpaperPath);
};

module.exports = wallpaper;
