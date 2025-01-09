const LikeService = require("../services/Like.service");
const formatResponse = require("../utils/formatResponse");

class LikeController {
  static async getAllLikes(req, res) {
    try {
      const { user } = res.locals;
      const userId = user.id;
      const likes = await LikeService.getAllLikes(userId);
      return res.status(200).json(formatResponse(200, "success", likes));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async getOnePostItem(req, res) {
    try {
      const { user } = res.locals;
      const userId = user.id;
      const { postId } = req.params;
      const like = await LikeService.getByLikeId(userId, postId);
      if (!like) {
        return res.status(200).json(formatResponse(200, "success", null)); // Возвращаем null, если твит не найден
      }
      return res.status(200).json(formatResponse(200, "success", like));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async createLike(req, res) {
    try {
      const { user } = res.locals;
      const userId = user.id;
      const { postId } = req.body;
      const like = await LikeService.createLike(userId, postId);
      return res.status(201).json(formatResponse(201, "success", like));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async deleteLike(req, res) {
    try {
      const { user } = res.locals;
      const userId = user.id;
      const { postId } = req.params;
      const like = await LikeService.getByLikeId(userId, postId);

      if (!like) {
        return res
          .status(404)
          .json(formatResponse(404, "Like not found", null, "Like not found"));
      }
      if (like.userId !== user.id) {
        return res
          .status(400)
          .json(
            formatResponse(
              400,
              "No rights to delete like",
              null,
              "No rights to delete like"
            )
          );
      }
      const deleteLike = await LikeService.deleteLike(userId, postId);
      console.log(55555, deleteLike);

      res
        .status(200)
        .json(formatResponse(200, "Favorite successfully deleted", deleteLike));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }
}

module.exports = LikeController;
