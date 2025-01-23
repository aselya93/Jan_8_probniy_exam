import { axiosInstance } from "../../shared/lib/axiosInstance";

export default class PostApi {
  static async getPosts() {
    try {
      const { data } = await axiosInstance.get("/posts");
      return data;
    } catch (error) {
      return error.response.data;
    }
  }

  static async createPost(newPost) {
    try {
      const { data } = await axiosInstance.post("/posts", newPost);
      return data;
    } catch (error) {
      return error.response.data;
    }
  }

  static async getPostById(id) {
    try {
      const { data } = await axiosInstance.get(`/posts/${id}`);
      return data;
    } catch (error) {
      return error.response.data;
    }
  }

  static async getAllPostByUserId(userId) {
    try {
      const { data } = await axiosInstance.get(`/posts/user/${userId}`);
      return data;
    } catch (error) {
      return error.response.data;
    }
  }

  static async deletePost(id) {
    try {
      const { data } = await axiosInstance.delete(`/posts/${id}`);
      return data;
    } catch (error) {
      return error.response.data;
    }
  }

  static async updatePost(id, postData) {
    try {
      const { data } = await axiosInstance.put(`/posts/${id}`, postData);
      return data
    } catch (error) {
      return error.response.data;
    }
  }
}
