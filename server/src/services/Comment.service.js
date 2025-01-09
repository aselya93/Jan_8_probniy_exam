const { Comment, User } = require("../db/models");

class CommentService {
  static async getAll(postId) {
    return await Comment.findAll({
      where: { postId },
      include: [{ model: User }],
    });
  }

  static async getById(id) {
    return await Comment.findOne({
      where: { id },
      include: [{ model: User }],
    });
  }

  static async create(data) {
    const newComment = await Comment.create(data);
    return await this.getById(newComment.id);
  }

  static async delete(id) {
    const comment = await this.getById(id);
    if (comment) {
      await Comment.destroy();
    }
    return Comment;
  }
}

module.exports = CommentService;
