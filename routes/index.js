const router = require("express").Router();
const userRouter = require("./users");
const clothingItemRoutes = require("./clothingItem");

const { login, createUser } = require("../controllers/users");

// auth routes
router.post("/signin", login);
router.post("/signup", createUser);

router.use("/users", userRouter);
router.use("/items", clothingItemRoutes);

router.use((req, res) => {
  res.status(404).send({
    message: "Requested resource not found",
  });
});

module.exports = router;