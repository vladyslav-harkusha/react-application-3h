import { Navigate } from "react-router-dom";
import { About } from "../pages/About";
import { Errorr } from "../pages/Errorr";
import { PostIdPage } from "../pages/PostIdPage";
import { Posts } from "../pages/Posts";

export const routes = [
  { path: "/about", element: <About /> },
  { path: "/posts", element: <Posts /> },
  { path: "/posts/:id", element: <PostIdPage /> },
  { path: "/errorr", element: <Errorr /> },
  { path: "/", element: <Navigate to="/posts" replace /> },
  { path: "/*", element: <Navigate to = "/errorr" replace /> },
];