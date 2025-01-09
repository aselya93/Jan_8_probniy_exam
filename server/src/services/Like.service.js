const { Like, Post } = require("../db/models");

class LikeService {
  static async getById(postId) {
    // Проверяем, существует ли уже лайк
    return await Like.findByPk(postId);
  }

  static async getByLikeId(userId, postId) {
    return await Like.findOne({ where: { userId, postId } });
  }
  static async getAllLikes(userId) {
    return await Like.findAll({
      where: { userId },
      include: [{ model: Post, as: "post" }],
    });
  }

  static async createLike(userId, postId) {
    const newLike = await Like.create({ userId, postId });
    return newLike;
  }

  static async deleteLike(userId, postId) {
    const like = await this.getByLikeId(userId, postId);
    if (like) {
      await like.destroy();
    }
    return like;
  }
  static async likeCounter(postId) {
    const counter = await Post.findByPk(postId);
    counter.likeCount += 1;
    await counter.save();
    return counter;
  }
}
module.exports = LikeService;
