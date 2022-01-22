const path = require("path");

const screenshot = (req, res) => {
  const name = req.params.name;
  const SCREENSHOT = "/assets/screenshots/";
  const screenshotPath = path.join(__dirname, SCREENSHOT, name);
  res.download(screenshotPath);
};

module.exports = screenshot;
