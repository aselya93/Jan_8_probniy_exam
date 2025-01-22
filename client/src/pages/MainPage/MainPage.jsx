import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./MainPage.module.css";
import { RightOutlined } from "@ant-design/icons";

function MainPage({ user }) {
  const navigate = useNavigate();

  return (
    <div className={styles.mainPage}>
      <div className={styles.heroSection}>
        <h1 className={styles.title}>
          Добро пожаловать в Twitter-like приложение!
        </h1>
        <p className={styles.subtitle}>
          Читайте твиты, пишите свои, общайтесь с друзьями!
        </p>

        {user ? (
          <Button
            type="primary"
            size="large"
            onClick={() => navigate("/posts")}
            className={styles.ctaButton}
            icon={<RightOutlined />}
          >
            Перейти к ленте
          </Button>
        ) : (
          <div className={styles.authButtons}>
            <Button
              type="primary"
              size="large"
              onClick={() => navigate("/signin")}
              className={styles.ctaButton}
            >
              Войти
            </Button>
            <Button
              type="default"
              size="large"
              onClick={() => navigate("/signup")}
              className={styles.ctaButton}
            >
              Регистрация
            </Button>
          </div>
        )}
      </div>

      <div className={styles.featuresSection}>
        <div className={styles.featureCard}>
          <h2>Читайте твиты</h2>
          <p>
            Следите за последними обновлениями от друзей и интересных людей.
          </p>
        </div>
        <div className={styles.featureCard}>
          <h2>Пишите свои твиты</h2>
          <p>Делитесь своими мыслями, идеями и новостями с миром.</p>
        </div>
        <div className={styles.featureCard}>
          <h2>Общайтесь с друзьями</h2>
          <p>Комментируйте, лайкайте и обсуждайте твиты.</p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
