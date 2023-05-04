import { useEffect } from "react";
import usePosts from "../hooks/usePosts";
import Post from "./Post";
import { Link } from "react-router-dom";

export default function Home() {
  const { blogPosts, isLoading, fetchPosts } = usePosts();
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
        {blogPosts?.map((item) => (
          <Link key={item.id} to={`/blog/${item.id}`}>
            <Post title={item.title} description={item.description} postDate={item.date} author={item.author} />
          </Link>
        ))}
      </div>
    </>
  )
}
