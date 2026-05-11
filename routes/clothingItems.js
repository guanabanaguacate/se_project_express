const router = require("express").Router()

router.get("/", ()=> console.log("GET items"));
router.post("/:userId", ()=> console.log("POST new item"));
router.delete("/", ()=> console.log("DELETE item by ID"));

module.exports = router;