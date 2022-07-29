import { Navigate } from "react-router-dom";
import { About } from "../pages/About";
import { Errorr } from "../pages/Errorr";
import { PostIdPage } from "../pages/PostIdPage";
import { Posts } from "../pages/Posts";
import { Login } from "../pages/Login";
import { PostsInfinityScroll } from "../pages/PostsInfinityScroll";

export const privateRoutes = [
  { path: "/react-application-3h/about", element: <About /> },
  { path: "/react-application-3h/posts", element: <Posts /> },
  { path: "/react-application-3h/posts_infinity_scroll", element: <PostsInfinityScroll /> },
  { path: "/react-application-3h/posts/:id", element: <PostIdPage /> },
  { path: "/react-application-3h/errorr", element: <Errorr /> },
  { path: "/react-application-3h/login", element: <Navigate to="/react-application-3h/posts" replace /> },
  { path: "/react-application-3h/", element: <Navigate to="/react-application-3h/posts" replace /> },
];

export const publicRoutes = [
  { path: "/react-application-3h/login", element: <Login /> },
  { path: "/*", element: <Navigate to="/react-application-3h/login" replace /> },
];