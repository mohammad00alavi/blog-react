import { useParams } from 'react-router-dom';
import usePosts from '../hooks/usePosts';
import { useState } from 'react';

export default function Blog() {
  const { postId } = useParams();
  const { blogPosts, editPost } = usePosts();
  const [edit, setEdit] = useState(false);

  const post = blogPosts.find(item => item.id.toString() === postId);

  const [postData, setPostData] = useState({
    title: post?.title || '',
    description: post?.description || '',
    author: post?.author || '',
    date: post?.date || '',
  }),
   titleChangeHandler = (e) => {
    const value = e.target.value;
    setPostData({...postData, title: value });
  },
    authorChangeHandler = (e) => {
    const value = e.target.value;
    setPostData({...postData, author: value });
  }, 
    descriptionChangeHandler = (e) => {
    const value = e.target.value;
    setPostData({...postData, description: value });
  },
    onSubmitHandler = (e) => {
      e.preventDefault();
      editPost(postData, post.id);
      setEdit(false);
    }

  if (!post) {
    return <div>Blog post not found</div>;
  }

  const editHandler = () => {
    setEdit(true);
  }
  

  if(edit) {
    return (
      <div>
      <h1>Add Post</h1>
      <form onSubmit={onSubmitHandler}>
        <input type="text" required name='title' value={postData.title} onChange={titleChangeHandler} />
        <input type="text" required name='author' value={postData.author} onChange={authorChangeHandler} />
        <textarea required name='description' value={postData.description} onChange={descriptionChangeHandler} />
        <button type="submit">Send</button>
      </form>
    </div>
    )
  }

  return (
    <div>
      <h2>{postData?.title}</h2>
      <p>{postData?.description}</p>
      <p>Author: {postData?.author}</p>
      <button onClick={editHandler}>Edit</button>
    </div>
    
  );
}
