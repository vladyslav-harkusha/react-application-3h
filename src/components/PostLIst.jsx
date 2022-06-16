import { PostItem } from './PostItem';


export const PostList = ({ posts, title, remove }) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: 'red' }}>
        {title}
      </h1>
      {posts.map((post, index) =>
        <PostItem remove={remove} number={index + 1} key={post.id} post={post} />
      )}
    </div>
  );
};