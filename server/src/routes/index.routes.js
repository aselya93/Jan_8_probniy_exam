const router = require("express").Router();
const authRoutes = require("./user.routes");
const postRoutes = require("./post.routes");
const likeRoutes = require("./like.routes");
const formatResponse = require("../utils/formatResponse");

router
  .use("/auth", authRoutes)
  .use("/posts", postRoutes)
  .use("/likes", likeRoutes);

router.use("*", (req, res) => {
  res
    .status(404)
    .json(formatResponse(404, "Not found", null, "Resource not found"));
});

module.exports = router;
