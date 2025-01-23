import React, { useState } from "react";
import { Button, Layout } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./MainPage.module.css";
import { RightOutlined } from "@ant-design/icons";
import { Footer } from "antd/es/layout/layout";

function MainPage({ user}) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  return (
    <Layout>
      <div className={styles.mainPage}>
        <div className={styles.heroSection}>
          <h1 className={styles.title}>
            Главное происходит здесь...в Twitter!
          </h1>
          <p className={styles.subtitle}>
            Читайте твиты, пишите свои, общайтесь с друзьями!
          </p>

          {!user ? (
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
          ) : (
            <Button
              type="primary"
              size="large"
              onClick={() => navigate("/posts")}
              className={styles.ctaButton}
              icon={<RightOutlined />}
            >
              Перейти к ленте
            </Button>
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
      <Footer
        style={{
          textAlign: "center",
          background: "#000",
          color: "#b3b3b3",
          padding: "20px 0",
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <a
            href="/terms"
            style={{
              color: "#b3b3b3",
              margin: "0 15px",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            Условия использования
          </a>
          <a
            href="/contact"
            style={{
              color: "#b3b3b3",
              margin: "0 15px",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            Контакты
          </a>
        </div>
        <p
          style={{
            color: "#b3b3b3",
            fontSize: "14px",
            marginTop: "10px",
          }}
        >
          ©2025 Все ваши права защищены :)
        </p>
      </Footer>
    </Layout>
  );
}

export default MainPage;
