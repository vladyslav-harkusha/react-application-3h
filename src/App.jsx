import { useState } from 'react';
// import { Counter } from "./components/Counter";
// import { ClassCounter } from "./components/ClassCounter";
import { PostList } from './components/PostLIst';
import { PostForm } from './components/PostForm';
import { MySelect } from "./components/UI/select/MySelect";
import './styles/App.css';

export const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Восхитительный' },
    { id: 2, title: 'Pyton', body: 'Отличный' },
    { id: 3, title: 'PHP', body: 'Замечательый' },
    { id: 4, title: 'Cotlin', body: 'Суперский' },
  ]);
  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  };

  //получаем из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);

    setPosts([...posts].sort((post1, post2) => post1[sort].localeCompare(post2[sort])));
  }

  return (
    <div className="App">
      <PostForm create={createPost} />

      <hr style={{margin: "15px 0"}} />

      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
          ]}
        />
      </div>

      {posts.length
        ? <PostList remove={removePost} posts={posts} title="Список языков программирования" />
        : <h2 style={{color: "orange", textAlign: "center"}}>
            Посты не найдены!
          </h2>
      }
    </div>
  );
};
