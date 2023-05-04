import { createContext } from "react"
import useFetchPosts from "./hooks/useFetchPosts";
import useWritePosts from "./hooks/useWritePosts";
import usePostEdit from "./hooks/usePostEdit";
import useDelete from "./hooks/useDelete";

const BlogContext = createContext({
  blogPosts: [],
  isLoading: true,
  setIsLoading: () => {},
  error: '',
  fetchPosts: () => {},
  writePosts: (post) => {},
  editPost: (post, id) => {},
  deletePost: (id) => {},
});

export const BlogProvider = ({ children }) => {
  const { blogPosts, isLoading, setIsLoading, error, fetchPosts } = useFetchPosts();
  const writePosts = useWritePosts();
  const editPost = usePostEdit();
  const deletePost = useDelete();

  const context = {
    blogPosts,
    isLoading,
    setIsLoading,
    error,
    fetchPosts,
    writePosts,
    editPost,
    deletePost,
  }
  return (
    <BlogContext.Provider value={context} >
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContext;
