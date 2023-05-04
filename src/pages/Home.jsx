import { useEffect } from "react";
import usePosts from "../hooks/usePosts";

export default function Home() {
  const { blogPosts, error, isLoading, fetchPosts } = usePosts();
  console.log(blogPosts, error, isLoading, fetchPosts)
  useEffect(() => {
    fetchPosts();
  })

  if(isLoading) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <>
      <div>Home</div>
    </>
  )
}
