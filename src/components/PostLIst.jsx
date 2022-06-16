import { PostItem } from './PostItem';


export const PostList = ({ posts, title, remove }) => {

  if (!posts.length) {
    return (
      <h2 style={{ color: "orange", textAlign: "center" }}>
        Посты не найдены!
      </h2>
    );
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: 'yellowgreen' }}>
        {title}
      </h1>
      {posts.map((post, index) =>
        <PostItem remove={remove} number={index + 1} key={post.id} post={post} />
      )}
    </div>
  );
};