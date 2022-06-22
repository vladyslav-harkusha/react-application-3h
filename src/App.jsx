import { useState, useEffect } from 'react';
import { PostList } from './components/PostLIst';
import { PostForm } from './components/PostForm';
import { PostFilter } from './components/PostFilter';
import { MyModal } from './components/UI/modal/MyModal';
import './styles/App.css';
import { MyButton } from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostsService';
import { Loader } from './components/UI/Loader/Loader';
import { useFetching } from './hooks/useFetching';
import { getPageCount } from './utils/pages';
import { Pagination } from './components/UI/pagination/Pagination';
import { MySelect } from './components/UI/select/MySelect';

export const App = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line
  }, [page, limit]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  //получаем из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  const changePage = (page) => {
    setPage(page);
  };

  console.log(limit);

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

      {postError &&
        <h2 style={{textAlign: "center", color: "red"}}>
          {`Что-то пошло не так => ${postError}`}
        </h2>
      }

      {isPostsLoading
        ? <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}>
            <Loader />
          </div> 
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов" />
      }

      <MySelect
        value={limit}
        onChange={limit => setLimit(limit)}
        defaultValue="Постов на странице"
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 20, name: '20' },
        ]}
      />

      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
};
