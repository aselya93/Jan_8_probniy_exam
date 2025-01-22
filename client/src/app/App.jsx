import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { setAccessToken } from "../shared/lib/axiosInstance";
import Navigation from "../widgets/Navigation/Navigation";
import MainPage from "../pages/MainPage/MainPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import UserApi from "../entities/user/UserApi";
import UserPostsPage from "../pages/UserPostsPage/UserPostsPage";
import AllPostsPage from "../pages/AllPostsPage/AllPostsPage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    UserApi.refreshTokens()
      .then(({ error, data, statusCode }) => {
        if (error) {
          setUser(null);
          return;
        }
        if (statusCode === 200) {
          setAccessToken(data.accessToken);
          setUser(data.user);
        }
      })
      .catch(({ message }) => {
        console.log(message);
      });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigation user={user} setUser={setUser} />,
      children: [
        { path: "/", element: <MainPage user={user} /> },
        { path: "/signup", element: <SignUpPage setUser={setUser} /> },
        { path: "/signin", element: <SignInPage asetUser={setUser} /> },
        {
          path: "/posts",
          element: user ? (
            <AllPostsPage user={user} />
          ) : (
            <SignInPage setUser={setUser} />
          ),
        },
        { path: "/posts/:id", element: <UserPostsPage user={user} /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
