import React, { useEffect, useState } from "react";
import { message as antMessage } from "antd";
import PostApi from "../../entities/post/PostApi";
import PostList from "../../widgets/PostList/PostList";
import styles from "./AllPostsPage.module.css";
import UserSidebar from "../../widgets/UserSidebar/UserSidebar";

function AllPostsPage({ user }) {
  const [loading, setloading] = useState(false);
  const [posts, setPosts] = useState([]);

  const loadPosts = async () => {
    setloading(true);
    try {
      const { data, message, error, statusCode } = await PostApi.getPosts();
      if (error) {
        antMessage.error(error);
        return;
      }
      antMessage.success(message);
      if (statusCode === 200) {
        setPosts(data);
      }
    } catch (error) {
      antMessage.error(error.message);
      console.log(error);
    } finally {
      antMessage.info("Загрузка завершена");
      setloading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className={styles.postsPage}>
      <UserSidebar user={user} />
      <div className={styles.postsContainer}>
        {loading && <h5>Загрузка...</h5>}
        <PostList posts={posts} setPosts={setPosts} />
      </div>
    </div>
  );
}

export default AllPostsPage;
