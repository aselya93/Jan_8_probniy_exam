const isValidId = require("../utils/isValidId");
const PostService = require("../services/Post.service");
const formatResponse = require("../utils/formatResponse");
const PostValidator = require("../utils/Post.validator");

class PostController {
  static async getAllPosts(req, res) {
    try {
      const posts = await PostService.getAll();
      if (posts.length === 0) {
        return res.status(200).json(formatResponse(200, "No Posts found", []));
      }
      res.status(200).json(formatResponse(200, "success", posts));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async getPostById(req, res) {
    try {
      const { id } = req.params;
      if (!isValidId(id)) {
        return res.status(400).json(formatResponse(400, "Invalid Post ID"));
      }
      const post = await PostService.getById(id);
      if (!post) {
        return res
          .status(404)
          .json(formatResponse(404, `Post with id ${id} not found`));
      }
      res.status(200).json(formatResponse(200, "success", post));
    } catch ({ message }) {
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async createPost(req, res) {
    const { content } = req.body;
    const { user } = res.locals;
    const user_id = user.id;
    const { isValid, error } = PostValidator.validate({
      content,
      user_id,
    });
    if (!isValid) {
      return res
        .status(400)
        .json(formatResponse(400, "Validation error", null, error));
    }
    try {
      const newPost = await PostService.create({
        content,
        user_id: user.id,
      });
      if (!newPost) {
        return res
          .status(400)
          .json(formatResponse(400, `Failed to create new Post`));
      }
      res.status(201).json(formatResponse(201, "success", newPost));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async updatePost(req, res) {
    const { id } = req.params;
    const { user } = res.locals;
    const { content } = req.body;
    if (isValidId(id)) {
      return res.status(400).json(formatResponse(400, "Invalid Post ID"));
    }
    //! Проверка наличия необходимых данных - Используем MovieValidator (обработка негативного кейса)
    const { isValid, error } = PostValidator.validate({
      content,
    });
    if (!isValid) {
      return res
        .status(400)
        .json(formatResponse(400, "Validation error", null, error));
    }
    try {
      const postFindWithId = await PostService.getById(+id);
      if (postFindWithId.userId !== user.id ) {
        return res
          .status(400)
          .json(
            formatResponse(
              400,
              `No rights to update Post with id ${id}`,
              null,
              `No rights to update Post with id ${id}`
            )
          );
      }
      const updatePost = await PostService.update(+id, {
        content,
      });
      res.status(200).json(formatResponse(200, "success", updatePost));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async deletePost(req, res) {
    const { id } = req.params;
    const { user } = user.locals;
    if (!isValidId(id)) {
      return res.status(400).json(formatResponse(400, "Invalid Post ID"));
    }
    try {
      const postFindIdForDelete = await PostService.getById(+id);
      if (postFindIdForDelete.userId !== user.id) {
        return res
          .status(400)
          .json(
            formatResponse(
              400,
              `No rights to delete post with id ${id}`,
              null,
              `No rights to delete post with id ${id}`
            )
          );
      }
      const deletePost = await PostService.delete(id);
      if (!deletePost) {
        return res
          .status(404)
          .json(formatResponse(404, `Post with id ${id} not found`));
      }
      res
        .status(200)
        .json(
          formatResponse(
            200,
            `Post with id ${id} successfully deleted`,
            deletePost
          )
        );
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }
}
module.exports = PostController;
