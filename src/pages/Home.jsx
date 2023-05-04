import { useEffect } from "react";
import usePosts from "../hooks/usePosts";
import Post from "./Post";
import { Link } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";

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
          <div key={item.id}>
            <Link  to={`/blog/${item.id}`}>
              <Post title={item.title} description={item.description} postDate={item.date} author={item.author} />
            </Link>
            <DeleteButton postId={item.id} />
          </div>
        ))}
      </div>
    </>
  )
}
