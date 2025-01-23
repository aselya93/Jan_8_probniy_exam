import React from "react";
import styles from "./UserSidebar.module.css";
import { Card, List, Typography } from "antd";
const { Title, Text } = Typography;

function UserSidebar({ user }) {
  const trendingTopics = [
    { title: "Кино", count: "114 тыс." },
    { title: "Перезавета", count: "18,6 тыс." },
    { title: "Языковский", count: "32 тыс." },
  ];

  const whoToFollow = [{ name: "@Thanos" }, { name: "@HULK" }];

  return (
    <div className={styles.sidebar}>
      <Card className={styles.userInfo}>
        <Title> {user?.username || "Пользователь"}</Title>
        <Text type="secondary">
          @{user?.username || "username"} <br />
        </Text>
        <Text>
          94 читателей <br />
          145 читаемых{" "}
        </Text>
      </Card>

      <Card title="Актуальные темы для вас" className={styles.trendingTopics}>
        <List
          dataSource={trendingTopics}
          renderItem={(item) => (
            <List.Item className={styles.antListItem}>
              <Text strong>{item.title}</Text>
              <Text type="secondary">{item.count}</Text>
            </List.Item>
          )}
        />
      </Card>

      <Card title="Кого читать" className={styles.whoToFollow}>
        <List
          dataSource={whoToFollow}
          renderItem={(item) => (
            <List.Item className={styles.antListItem}>
              <Text strong>{item.name}</Text>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
}

export default UserSidebar;
