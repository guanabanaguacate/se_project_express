const router = require("express").Router();
const { NOT_FOUND } = require("../utils/errors");

const { login, createUser } = require("../controllers/users");

const auth = require("../middlewares/auth");
const userRouter = require("./users");
const clothingItemRoutes = require("./clothingItem");

router.post("/signup", createUser);
router.post("/signin", login);

router.use("/users", auth, userRouter);
router.use("/items", clothingItemRoutes);

router.use((req, res) => {
  res.status(NOT_FOUND).send({
    message: "Requested resource not found",
  });
});

module.exports = router;
