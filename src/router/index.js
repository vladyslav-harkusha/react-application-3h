import { Navigate } from "react-router-dom";
import { About } from "../pages/About";
import { Errorr } from "../pages/Errorr";
import { PostIdPage } from "../pages/PostIdPage";
import { Posts } from "../pages/Posts";
import { Login } from "../pages/Login";

export const privateRoutes = [
  { path: "/about", element: <About /> },
  { path: "/posts", element: <Posts /> },
  { path: "/posts/:id", element: <PostIdPage /> },
  { path: "/errorr", element: <Errorr /> },
  { path: "/", element: <Navigate to="/posts" replace /> },
  { path: "/*", element: <Navigate to = "/errorr" replace /> },
];

export const publicRoutes = [
  { path: "/login", element: <Login /> },
];