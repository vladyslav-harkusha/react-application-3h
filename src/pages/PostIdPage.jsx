import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostsService";
import { Loader } from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import "../styles/PostIdPage.scss";

export const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });

  const [fetchComments, isComLoading, comError] = useFetching(async () => {
    const response = await PostService.getCommentsByPostId(params.id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
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

      <h3 style={{margin: "20px auto"}}>Комментарии</h3>

      {isComLoading
        ? <Loader />
        : <ul className="post-page__comments">
            {comments.map(comment =>
              <li className="post-page__comment">
                <h4 className="post-page__comment-email">{comment.email}</h4>
                <p className="post-page__comment-body">{comment.body}</p>
              </li>
            )}
          </ul>
      }
    </div>
  )
};
