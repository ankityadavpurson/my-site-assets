const os = require("os");

module.exports = (port) => {
  const ifaces = os.networkInterfaces();
  Object.keys(ifaces).forEach((ifname) => {
    let alias = 0;
    const ips = [];
    ifaces[ifname].forEach((iface) => {
      if ("IPv4" !== iface.family || iface.internal !== false) return;
      if (alias >= 1)
        ips.push(ifname + ":" + alias, "at", iface.address + ":" + port);
      else ips.push("Running on", ifname, "at", iface.address + ":" + port);
      ++alias;
    });
    if (ips.length !== 0) console.log(ips.join(" "));
  });
};
