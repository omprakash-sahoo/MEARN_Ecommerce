const jwt = require("jsonwebtoken");
const responseReturn = require("../utiles/response");

const authMiddleware = async (req, res, next) => {
  try {
    const { accessToken } = req.cookies;
    if (accessToken) {
      const decodeToken = jwt.verify(accessToken, process.env.SECRET_JWT);
      req.role = decodeToken.role;
      req.id = decodeToken.id;
      next();
    } else {
      responseReturn(res, 409, { error: "Please Login First" });
    }
  } catch (error) {
    responseReturn(res, 409, { error: "Please Login" });
  }
};

module.exports = authMiddleware;
