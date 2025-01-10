const router = require("express").Router();
const PostController = require("../controllers/Post.controller");
const verifyAccessToken = require("../middleware/verifyAccessToken");
const upload = require("../middleware/multer");

router
  .get("/", verifyAccessToken, PostController.getAllPosts)

  .get("/:id", verifyAccessToken, PostController.getPostById)

  .post(
    "/",
    verifyAccessToken,
    upload.single("image"),
    PostController.createPost
  )

  .put("/:id", verifyAccessToken, PostController.updatePost)

  .delete("/:id", verifyAccessToken, PostController.deletePost);

module.exports = router;
