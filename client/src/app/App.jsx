import { useState } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "../widgets/Navigation/Navigation";
import MainPage from "../pages/MainPage/MainPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import PostsPage from "../pages/PostsPage/PostsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

function App() {
  const [user, setUser] = useState(null)

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
            <PostsPage user={user} />
          ) : (
            <SignInPage setUser={setUser} />
          ),
        },
        { path: "*", element: <NotFoundPage /> },
      ]
      }
  ])

  return <RouterProvider router={router} />;
}

export default App
