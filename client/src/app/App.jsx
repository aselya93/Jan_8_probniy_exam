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
    const refreshTokens = async () => {
      try {
        const { error, data, statusCode } = await UserApi.refreshTokens();
        console.log("refreshTokens response:", { error, data, statusCode });
        if (error) {
          setUser(null);
          return;
        }
        if (statusCode === 200) {
          setAccessToken(data.accessToken);
          setUser(data.user);
        }
      } catch (error) {
        console.log(error.message);
        setUser(null);
      }
    };

    refreshTokens();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigation user={user} setUser={setUser} />,
      children: [
        { path: "/", element: <MainPage user={user} setUser={setUser} /> },
        { path: "/signup", element: <SignUpPage setUser={setUser} /> },
        { path: "/signin", element: <SignInPage setUser={setUser} /> },
        {
          path: "/posts",
          element: user ? (
            <AllPostsPage user={user} />
          ) : (
            <SignInPage setUser={setUser} />
          ),
        },
        { path: '/posts/user/:userId', element: <UserPostsPage /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
