import { MyButton } from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";
import '../styles/PostItem.scss';

export const PostItem = (props) => {
  const navigate = useNavigate();

  return (
    <div className="post">
      <div className="post__content">
        <p className="post__title">{props.post.id}. {props.post.title}</p>
        <p className="post__text">{props.post.body}</p>
      </div>

      <div className="post__btns">
        <MyButton onClick={() => navigate(`/react-application-3h/posts/${props.post.id}`)}>
          Открыть
        </MyButton>

        <MyButton onClick={() => props.remove(props.post)}>
          Удалить
        </MyButton>
      </div>
    </div>
  );
};