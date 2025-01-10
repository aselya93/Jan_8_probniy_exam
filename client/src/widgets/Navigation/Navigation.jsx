import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { message as antMessage, Button, message } from "antd";
import UserApi from "../../entities/user/UserApi";
import { setAccessToken } from "../../shared/lib/axiosInstance";

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
        setAccessToken(""), setUser(null), navigate("/");
      }
    } catch (error) {
      antMessage.error(message.error);
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        {user ? (
          <div>
            <Button onClick={signOutHandler}>Выйти</Button>
          </div>
        ) : (
          <div>
            <Link to="/signin">
              <Button type="link">Войти</Button>
            </Link>

            <Link to="signup">
              <Button type="link">Регистрация</Button>
            </Link>
          </div>
        )}
      </div>
      <Outlet />
    </div>
  );
}

export default Navigation;
