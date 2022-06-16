import { PostItem } from './PostItem';


export const PostList = ({ posts, title }) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: 'red' }}>
        {title}
      </h1>
      {posts.map((post, index) =>
        <PostItem number={index + 1} key={post.id} post={post} />
      )}
    </div>
  );
};