import { useState } from 'react';
// import { Counter } from "./components/Counter";
// import { ClassCounter } from "./components/ClassCounter";
import { PostList } from './components/PostLIst';
import { PostForm } from './components/PostForm';
import './styles/App.css';

export const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'Pyton', body: 'Description' },
    { id: 3, title: 'PHP', body: 'Description' },
    { id: 4, title: 'Cotlin', body: 'Description' },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  };

  //получаем из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <ClassCounter /> */}

      <PostForm create={createPost} />
      <PostList remove={removePost} posts={posts} title="Список языков программирования" />
    </div>
  );
};
