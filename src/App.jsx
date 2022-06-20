import { useState } from 'react';
import { PostList } from './components/PostLIst';
import { PostForm } from './components/PostForm';
import { PostFilter } from './components/PostFilter';
import { MyModal } from './components/UI/modal/MyModal';
import './styles/App.css';
import { MyButton } from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';

export const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Восхитительный!' },
    { id: 2, title: 'Pyton', body: 'Отличный' },
    { id: 3, title: 'PHP', body: 'Замечательый' },
    { id: 4, title: 'Cotlin', body: 'Суперский' },
  ]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  //получаем из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: "20px"}} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{margin: "15px 0", height: "6px", backgroundColor: "darkgreen"}} />

      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список языков программирования" />
    </div>
  );
};
