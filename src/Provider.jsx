import { createContext, useCallback, useState } from "react"
import useFetchPosts from "./hooks/useFetchPosts";

const BlogContext = createContext({
  blogPosts: [],
  isLoading: true,
  setIsLoading: () => {},
  error: '',
  fetchPosts: () => {},

});

export const BlogProvider = ({ children }) => {
  const { blogPosts, isLoading, setIsLoading, error, fetchPosts } = useFetchPosts();

  const context = {
    blogPosts,
    isLoading,
    setIsLoading,
    error,
    fetchPosts,

  }
  return (
    <BlogContext.Provider value={context} >
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContext;
