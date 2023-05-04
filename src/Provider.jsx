import { createContext, useCallback, useState } from "react"
import useFetchPosts from "./hooks/useFetchPosts";
import useWritePosts from "./hooks/useWritePosts";

const BlogContext = createContext({
  blogPosts: [],
  isLoading: true,
  setIsLoading: () => {},
  error: '',
  fetchPosts: () => {},
  writePosts: (post) => {},
});

export const BlogProvider = ({ children }) => {
  const { blogPosts, isLoading, setIsLoading, error, fetchPosts } = useFetchPosts();
  const writePosts = useWritePosts();

  const context = {
    blogPosts,
    isLoading,
    setIsLoading,
    error,
    fetchPosts,
    writePosts,

  }
  return (
    <BlogContext.Provider value={context} >
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContext;
