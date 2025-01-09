const CommentService = require("../services/Comment.service");
const CommentValidator = require("../utils/Comment.validator");
const formatResponse = require("../utils/formatResponse");
const isValidId = require("../utils/isValidId");

class CommentController {
  static async getAllComments(req, res) {
    try {
      const { postId } = req.params;
      const comments = await CommentService.getAll(postId);
      if (comments.length === 0) {
        return res
          .status(200)
          .json(formatResponse(200, "No comments found", []));
      }
      res.status(200).json(formatResponse(200, "success", comments));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async createComment(req, res) {
    try {
      const { content } = req.body;
      const { user } = res.locals;
      const user_id = user.id;
      const { postId } = req.params;
      const { isValid, error } = CommentValidator.validate({
        content,
        user_id,
      });
      if (!isValid) {
        return res
          .status(400)
          .json(formatResponse(400, "Validation error", null, error));
      }
      const newComment = await CommentController.createComment({
        content,
        user_id: user.id,
        postId,
      });
      if (!newComment) {
        return res
          .status(400)
          .json(formatResponse(400, `Failed to create new comment`));
      }
      res.status(201).json(formatResponse(201, "success", newComment));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async deleteComment(req, res) {
    const { id } = req.params;
    const { user } = res.locals;
    if (!isValidId(id)) {
      return res.status(400).json(formatResponse(400, "Invalid comment ID"));
    }
    try {
      const deleteComment = await CommentService.delete(id, user.id);
      if (!deleteComment) {
        return res
          .status(404)
          .json(formatResponse(404, `Comment with id ${id} not found`));
      }
      res
        .status(200)
        .json(
          formatResponse(
            200,
            `Comment with id ${id} successfully deleted`,
            deleteComment
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
module.exports = CommentController;
