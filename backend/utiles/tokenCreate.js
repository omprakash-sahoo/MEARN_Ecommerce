const jwt = require("jsonwebtoken");
const createToken = async (data) => {
  const token = await jwt.sign(data, process.env.SECRET_JWT, {
    expiresIn: "7d",
  });

  return token;
};

module.exports = createToken;
