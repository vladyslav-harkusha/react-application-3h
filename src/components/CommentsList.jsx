import "../styles/PostIdPage.scss";

export const CommentsList = ({ comments }) => {
  return (
    <ul className="post-page__comments">
      {comments.map(comment =>
        <li className="post-page__comment">
          <h4 className="post-page__comment-email">{comment.email}</h4>
          <p className="post-page__comment-body">{comment.body}</p>
        </li>
      )}
    </ul>
  )
}
