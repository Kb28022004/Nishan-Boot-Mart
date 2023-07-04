const jwt = require("jsonwebtoken");
const JWT_SECRET = "iamagoodboy";

const fetchuser = (req, res, next) => {
  //get the id from the jwt and add id to req object
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).json({ msg: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.User = data.User;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Please authenticate using a valid token" });
  }
};
module.exports = fetchuser;
