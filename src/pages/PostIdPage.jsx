import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostsService";
import { Loader } from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import "../styles/PostIdPage.scss";

export const PostIdPage = () => {
  const params = useParams();

  const [post, setPost] = useState({});
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
  }, [])

  return (
    <div className="post-page">
      <h1 className="post-page__h1">Вы открыли страницу поста c ID №{params.id}</h1>
      {isLoading
        ? <Loader />
        : <div className="post-page__wpapper">
            <div className="post-page__title">{post.id}. {post.title}</div>
            <p className="post-page__body">{post.body}</p>
          </div>
      }
    </div>
  )
};
