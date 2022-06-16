import { useState, useMemo } from 'react';
import { PostList } from './components/PostLIst';
import { PostForm } from './components/PostForm';
import { MySelect } from "./components/UI/select/MySelect";
import './styles/App.css';
import { MyInput } from './components/UI/input/MyInput';

export const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Восхитительный' },
    { id: 2, title: 'Pyton', body: 'Отличный' },
    { id: 3, title: 'PHP', body: 'Замечательый' },
    { id: 4, title: 'Cotlin', body: 'Суперский' },
  ]);
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuary] = useState('');

  const sortedPosts = useMemo(() => {
    console.log('ОТРАБОТАЛА ФУНКЦИЯ getSortedPosts');
    if (selectedSort) {
      return [...posts].sort((post1, post2) => post1[selectedSort].localeCompare(post2[selectedSort]))
    }

    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  };

  //получаем из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }

  return (
    <div className="App">
      <PostForm create={createPost} />

      <hr style={{margin: "15px 0", height: "6px", backgroundColor: "darkgreen"}} />

      <div>
        <MyInput
          placeholder="Поиск..."
          value={searchQuery}
          onChange={e => setSearchQuary(e.target.value)}
        />

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

      {sortedAndSearchedPosts.length
        ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список языков программирования" />
        : <h2 style={{color: "orange", textAlign: "center"}}>
            Посты не найдены!
          </h2>
      }
    </div>
  );
};
