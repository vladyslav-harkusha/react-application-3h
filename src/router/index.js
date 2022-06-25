import { Navigate } from "react-router-dom";
import { About } from "../pages/About";
import { Errorr } from "../pages/Errorr";
import { PostIdPage } from "../pages/PostIdPage";
import { Posts } from "../pages/Posts";
import { Login } from "../pages/Login";
import { PostsInfinityScroll } from "../pages/PostsInfinityScroll";

export const privateRoutes = [
  { path: "/about", element: <About /> },
  { path: "/posts", element: <Posts /> },
  { path: "/posts_infinity_scroll", element: <PostsInfinityScroll /> },
  { path: "/posts/:id", element: <PostIdPage /> },
  { path: "/errorr", element: <Errorr /> },
  { path: "/login", element: <Navigate to="/posts" replace /> },
  { path: "/", element: <Navigate to="/posts" replace /> },
  { path: "/*", element: <Navigate to = "/errorr" replace /> },
];

export const publicRoutes = [
  { path: "/login", element: <Login /> },
  { path: "/*", element: <Navigate to="/login" replace /> },
];