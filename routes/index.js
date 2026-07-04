const router = require("express").Router();
const { NOT_FOUND } = require("../utils/errors");

const { login, createUser } = require("../controllers/users");

const auth = require("../middlewares/auth");
const userRouter = require("./users");
const clothingItemRoutes = require("./clothingItem");

const {
  validateUserBody,
  validateLogin,
} = require("../middlewares/validation");

// AUTH ROUTES
router.post("/signup", validateUserBody, createUser);
router.post("/signin", validateLogin, login);

// PROTECTED ROUTES
router.use("/users", auth, userRouter);
router.use("/items", clothingItemRoutes);

// 404
router.use((req, res) => {
  res.status(NOT_FOUND).send({
    message: "Requested resource not found",
  });
});

module.exports = router;