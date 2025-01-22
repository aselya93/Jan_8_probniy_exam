import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { message as antMessage, Button } from "antd";
import UserApi from "../../entities/user/UserApi";
import { setAccessToken } from "../../shared/lib/axiosInstance";
import styles from "./Navigation.module.css";
import homeIcon from "../../assets/icons/icon-home.png";
import profileIcon from "../../assets/icons/icon-user.png";
import logoutIcon from "../../assets/icons//icon-logout.png";
import mainIcon from "../../assets/icons/icon-group.png";
import tweetIcon from "../../assets/icons/free-icon-twitter-4401446.png";

function Navigation({ user, setUser }) {
  const navigate = useNavigate();

  const signOutHandler = async () => {
    try {
      const { statusCode, error, message } = await UserApi.signOut();
      if (error) {
        antMessage.error(error);
        return;
      }
      antMessage.success(message);
      if (statusCode === 200) {
        setAccessToken("");
        setUser(null);
        navigate("/");
      }
    } catch (error) {
      antMessage.error(error.message);
      console.log(error);
    }
  };

  return (
    <div>
      <nav className={styles.navigation}>
        <div className={styles.navLeft}>
          <img
            src={homeIcon}
            alt="Main"
            onClick={() => navigate("/")}
            className={styles.navIcon}
          />
        </div>
        <div>
          <img src={tweetIcon} alt="Tweet" className={styles.navIconTweet} />
        </div>
        <div className={styles.navRight}>
          {user ? (
            <div className={styles.navButtons}>
              <Link to="/posts" className={styles.navLink}>
                <img src={mainIcon} alt="Home" className={styles.navIcon} />
              </Link>

              <Link to={`/posts/${user.id}`} className={styles.navLink}>
                <img
                  src={profileIcon}
                  alt="Profile"
                  className={styles.navIcon}
                />
              </Link>
              <img
                src={logoutIcon}
                alt="Logout"
                onClick={signOutHandler}
                className={styles.navIcon}
              />
            </div>
          ) : (
            <div className={styles.navButtons}>
              <Link to="/signin" className={styles.navLink}>
                <Button type="link" className={styles.navLinkButton}>
                  Войти
                </Button>
              </Link>
              <Link to="/signup" className={styles.navLink}>
                <Button type="link" className={styles.navLinkButton}>
                  Регистрация
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navigation;
