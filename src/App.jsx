import { useState } from 'react';
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
  const [title, setTitle] = useState('');

  const addNewPost = (event) => {
    event.preventDefault();
    console.log(title);
  }

  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <ClassCounter /> */}
      <form>
        <MyInput
          type="text"
          placeholder="Название поста"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <MyInput type="text" placeholder="Описание поста"/>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>

      <PostList posts={posts} title="Список языков программирования" />
    </div>
  );
};
