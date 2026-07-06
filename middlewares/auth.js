const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/config");
const { UNAUTHORIZED } = require("../utils/errors");

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return next({
      statusCode: UNAUTHORIZED,
      message: "Authorization required",
    });
  }

  const [type, token] = authorization.split(" ");

  if (type !== "Bearer" || !token) {
    return next({
      statusCode: UNAUTHORIZED,
      message: "Authorization required",
    });
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);

    req.user = {
      _id: payload._id,
    };

    return next();
  } catch (err) {
    return next({
      statusCode: UNAUTHORIZED,
      message: "Invalid token",
    });
  }
};

module.exports = auth;