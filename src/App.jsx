import { useState } from 'react';
import { PostList } from './components/PostLIst';
import { PostForm } from './components/PostForm';
import { PostFilter } from './components/PostFilter';
import { MyModal } from './components/UI/modal/MyModal';
import './styles/App.css';
import { MyButton } from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import axios from 'axios';

export const App = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(response.data);
  }

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
      <MyButton onClick={fetchPosts}>
        GET POSTS
      </MyButton>

      <MyButton style={{marginTop: "20px"}} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{margin: "15px 0", height: "6px", backgroundColor: "darkgreen"}} />

      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов" />
    </div>
  );
};
