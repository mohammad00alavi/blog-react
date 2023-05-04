import { useEffect } from "react";
import usePosts from "../hooks/usePosts";
import Post from "./Post";

export default function Home() {
  const { blogPosts, error, isLoading, fetchPosts } = usePosts();
  useEffect(() => {
    fetchPosts();
  },[])

  if(isLoading) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <>
      <h1>Home</h1>
      <div>
        {blogPosts?.map(item => (
          <Post key={item.id} title={item.title} description={item.description} postDate={item.date} author={item.author} />
        ))}
      </div>
    </>
  )
}
