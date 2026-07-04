const router = require("express").Router();
const auth = require("../middlewares/auth");
const {
  getClothingItems,
  createClothingItem,
  deleteClothingItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItem");

const { validateCardBody, validateId } = require("../middlewares/validation");

router.get("/", getClothingItems);

router.use(auth);

router.post("/", validateCardBody, createClothingItem);

router.delete("/:itemId", validateId, deleteClothingItem);

router.put("/:itemId/likes", validateId, likeItem);

router.delete("/:itemId/likes", validateId, dislikeItem);

module.exports = router;
