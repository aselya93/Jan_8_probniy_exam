const { Post, User } = require("../db/models");

class PostService {
  static async getById(id) {
    return await Post.findOne({
      where: { id },
      include: [{ model: User }],
    });
  }

  static async getAllPostsByUserId(userId) {
    return await Post.findAll({
      where: { userId},
      include: [{ model: User}],
    });
  }

  static async create(data) {
    const newPost = await Post.create(data);
    return await this.getById(newPost.id);
  }

  static async getAll() {
    return await Post.findAll({
      include: [{ model: User }],
    });
  }

  static async delete(id) {
    const Post = await this.getById(id);
    await Post.destroy();
    return Post;
  }

  static async update(id, data) {
    const Post = await this.getById(id);
    if (Post) {
      Post.content = data.content;
      await Post.save();
    }
    return Post;
  }
}

module.exports = PostService;
