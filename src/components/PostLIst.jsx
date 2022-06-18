import { PostItem } from './PostItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import '../styles/PostList.css';


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

      <TransitionGroup>
        {posts.map((post, index) =>
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="item"
          >
            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};