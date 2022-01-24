const jwtDecode = require("jwt-decode").default;

const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwtDecode(token);

    const exp = decoded.exp * 1000;
    const current = Date.now();
    const timeExpired = current > exp;
    const validUser = decoded.user_id === process.env.ADMIN_USER_ID;

    if (timeExpired || !validUser) res.status(401).send("Invalid Token.");
    else next();
  } catch (error) {
    // console.log(error);
    res.status(400).send("Error Invalid Token.");
  }
};

module.exports = authenticate;
