const router = require("express").Router();
const {
  getCurrentUser,
  updateCurrentUser,
} = require("../controllers/users");

const {
  validateUpdateUser,
} = require("../middlewares/validation");

router.get("/me", getCurrentUser);

router.patch("/me", validateUpdateUser, updateCurrentUser);

module.exports = router;