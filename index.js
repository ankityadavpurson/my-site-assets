const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();

app.use(
  "/assets",
  router.get("/wallpaper/:name", function (req, res) {
    const wallpaperPath = path.join(
      __dirname,
      "/assets/wallpapers/",
      req.params.name
    );
    res.download(wallpaperPath);
  })
);

app.use(
  "/assets",
  router.get("/screenshot/:name", function (req, res) {
    const screenshotPath = path.join(
      __dirname,
      "/assets/screenshots/",
      req.params.name
    );
    res.download(screenshotPath);
  })
);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
