import { useRef, useState } from 'react';
// import { Counter } from "./components/Counter";
// import { ClassCounter } from "./components/ClassCounter";
import { PostList } from './components/PostLIst';
import { MyButton } from './components/UI/button/MyButton';
import { MyInput } from './components/UI/input/MyInput';
import './styles/App.css';

export const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'Pyton', body: 'Description' },
    { id: 3, title: 'PHP', body: 'Description' },
    { id: 4, title: 'Cotlin', body: 'Description' },
  ]);
  const [post, setPost] = useState({title: '', body: ''});

  // const bodyInputRef = useRef();

  const addNewPost = (event) => {
    event.preventDefault();

    setPosts([...posts, {...post, id: Date.now()}]);
    setPost({title: '', body: ''})
  };

  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <ClassCounter /> */}
      <form>
        <MyInput
          type="text"
          placeholder="Название поста"
          value={post.title}
          onChange={event => setPost({...post, title: event.target.value})}
        />

        <MyInput 
          type="text"
          placeholder="Описание поста"
          value={post.body}
          onChange={event => setPost({ ...post, body: event.target.value })}
          // ref={bodyInputRef}
        />

        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>

      <PostList posts={posts} title="Список языков программирования" />
    </div>
  );
};
