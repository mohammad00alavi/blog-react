import { useCallback } from "react";
import usePosts from "../hooks/usePosts";
import { useNavigate } from "react-router-dom";

export default function DeleteButton({ postId, redirect }) {
  const { fetchPosts, deletePost } = usePosts();
  const navigate = useNavigate();
  const deleteHandler = useCallback(async() => {
    await deletePost(postId);
    fetchPosts();
    if (redirect) {
      navigate('/');
    }
  },[fetchPosts, deletePost, postId])
  return (
    <button onClick={deleteHandler}>Delete Post</button>
  )
}
