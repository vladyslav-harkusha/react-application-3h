import { PostItem } from './PostItem';


export const PostList = ({ posts, title }) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: 'red' }}>
        {title}
      </h1>
      {posts.map(post =>
        <PostItem key={post.id} post={post} />
      )}
    </div>
  );
};