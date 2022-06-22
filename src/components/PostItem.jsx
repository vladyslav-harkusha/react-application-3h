import { MyButton } from "./UI/button/MyButton";
import '../styles/PostItem.scss';

export const PostItem = (props) => {

  return (
    <div className="post">
      <div className="post__content">
        <p className="post__title">{props.post.id}. {props.post.title}</p>
        <p className="post__text">{props.post.body}</p>
      </div>

      <div className="post__btns">
        <MyButton onClick={() => props.remove(props.post)}>
          Удалить
        </MyButton>
      </div>
    </div>
  );
};