const router = require("express").Router();

const { login, createUser } = require("../controllers/users");

const auth = require("../middlewares/auth");
const userRouter = require("./users");
const clothingItemRoutes = require("./clothingItem");

router.post("/signup", createUser);
router.post("/signin", login);

router.use("/users", auth, userRouter);
router.use("/items", auth, clothingItemRoutes);

router.use((req, res) => {
  res.status(NOT_FOUND).send({
    message: "Requested resource not found",
  });
});

module.exports = router;