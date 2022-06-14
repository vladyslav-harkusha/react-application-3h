export const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.post.id}. {props.post.title}</strong>
        <p>{props.post.body}</p>
      </div>

      <div className="post__btns">
        <button>Удалить</button>
      </div>
    </div>
  );
};