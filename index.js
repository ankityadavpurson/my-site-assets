const app = require("./app");
const hostName = require("./src/utils/host");

const port = process.env.PORT || 8080;
app.listen(port, hostName(port));
