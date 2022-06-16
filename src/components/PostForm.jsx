import { useState } from 'react';
import { MyButton } from './UI/button/MyButton';
import { MyInput } from './UI/input/MyInput';

export const PostForm = (props) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (event) => {
    event.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
    };

    props.create(newPost);

    setPost({ title: '', body: '' })
  };

  return (
    <form>
      <MyInput
        type="text"
        placeholder="Название поста"
        value={post.title}
        onChange={event => setPost({ ...post, title: event.target.value })}
        required
      />

      <MyInput
        type="text"
        placeholder="Описание поста"
        value={post.body}
        onChange={event => setPost({ ...post, body: event.target.value })}
        required
      />

      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
};
