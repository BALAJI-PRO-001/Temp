const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = "!@#$";

function verifyToken(req, res, next) {
  const accessToken = req.cookies.access_token;
  if (!accessToken) {
    return res.status(401).json({
      status: "failed",
      message: "Unauthorized"
    });
  }

  try {
    const decoded = jwt.verify(accessToken, JWT_SECRET_KEY);
    req.verifyUserId = decoded.id;
    next();
  } catch(error) {
    res.status(403).json({
      status: "failed",
      message: "Forbidden"
    });
  }
}

module.exports = verifyToken;