const fs = require("fs");
const main = require("../html-templates/main");

const home = (req, res) => {
  res.send(
    main(
      `
    <ul>
      <li class="listItem">
        <a href='assets'>Assets</a>
      </li>
      <li class="listItem">
        <a href='counter'>Counter</a>
      </li>
    </ul>`,
      "Ankit"
    )
  );
};

const assets = (req, res) => {
  res.send(
    main(
      `
    <ul>
      <li class="listItem">
        <a href='assets/wallpaper'>Wallpapers</a>
      </li>
      <li class="listItem">
        <a href='assets/screenshot'>Screenshots</a>
      </li>
    </ul>
    `,
      "Ankit - Assets"
    )
  );
};

const wallpaper = (req, res) => {
  const list = fileList("wallpaper");
  res.send(main(list, "Ankit - Wallpaper"));
};

const screenshot = (req, res) => {
  const list = fileList("screenshot");
  res.send(main(list, "Ankit - Screenshot"));
};

function fileList(folderName) {
  return (
    "<ul>" +
    fs
      .readdirSync(`./assets/${folderName}s`)
      .map(
        (file) =>
          `
        <li class="listItem">
          <a href='${folderName}/${file}'>${file}</a>
        </li>
        `
      )
      .join("") +
    "</ul>"
  );
}

module.exports = { home, assets, wallpaper, screenshot };
