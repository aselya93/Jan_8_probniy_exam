import { message as antMessage } from "antd";
import { useState } from "react";
import PostApi from "../../entities/post/PostApi";
import styles from "./PostList.module.css";

function PostList({ posts, setPosts }) {
  // const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleDeletePost = async (postId) => {
    try {
      setLoading(true);
      await PostApi.deletePost(postId);
      setPosts((prevPosts) => prevPosts.filter((item) => item.id !== postId));
      antMessage.success("Твит успешно удален");
    } catch (error) {
      antMessage.error(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.postList}>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            <p>{post.content}</p>
          </div>
        ))
      ) : (
        <span className={styles.noTweets}> Твиты не найдены</span>
      )}
    </div>
  );
}

export default PostList;
