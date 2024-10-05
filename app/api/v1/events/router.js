const express = require("express");
const router = express();
const {
  create,
  index,
  find,
  update,
  destroy,
  updateStatus,
} = require("./controller");

router.post("/events", create);
router.get("/events", index);
router.get("/events/:id", find);
router.put("/events/:id", update);
router.delete("/events/:id", destroy);
router.put("/events/:id/status", updateStatus);

module.exports = router;
