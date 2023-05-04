import { useState } from "react";
import usePosts from "../hooks/usePosts";

export default function AddPost() {
  const [postData, setPostData] = useState({
    title: '',
    description: '',
    author: '',
    date: '',
  }),
    { writePosts } = usePosts(),
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
      writePosts(postData);
    }
  
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
  );
}
