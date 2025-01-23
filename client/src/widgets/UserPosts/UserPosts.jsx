import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { message as antMessage, message } from "antd";
import PostApi from "../../entities/post/PostApi";
import { Card, Typography } from "antd";
const { Title, Text } = Typography;

function UserPosts({user}) {
  const [mytweets, setMytweets] = useState([]);
  const { userId } = useParams();
  const [loading, setLoading] = useState(false);

  async function allPostsByUserHandler() {
    setLoading(true);
    try {
      const response = await PostApi.getAllPostByUserId(userId);
      const { data, error, statusCode, message } = response;
      if (error) {
        antMessage.error(error);
        return;
      }
      antMessage.success(message);
      if (statusCode === 200) {
        setMytweets(data);
      }
    } catch (error) {
      console.log(error);
      antMessage.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    console.log("userId from useParams:", userId);
    allPostsByUserHandler();
  }, [userId]);

  if (mytweets.length === 0) {
    return <h3>Твитов пока что нет</h3>;
  }

  const deletePostHandler = async () => {
    if (!mytweets) return;
    setLoading(true);
    try {
      await PostApi.deletePost(mytweets.id);
      antMessage.success(message);
      setMytweets(null);
    } catch (error) {
      console.log(error);
      antMessage.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {mytweets.map((tweet) => (
        <Card key={tweet.id} style={{ marginBottom: "16px" }}>
          <Text type="secondary">
            {" "}
            @{tweet.User?.username || "username"}{" "}
          </Text>
          <p>{tweet.content}</p>
        </Card>
      ))}
    </div>
  );
}

export default UserPosts;
