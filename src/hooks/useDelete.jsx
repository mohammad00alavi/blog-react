import { useCallback } from "react"

const useDelete = () => {
  const deletePost = useCallback( async (id) => {
  const url = `https://blog-react-789c5-default-rtdb.europe-west1.firebasedatabase.app/blogPosts/${id}.json`;
    try {
      const response = await fetch(url, { method: "DELETE" });
      if (!response.ok) {
        throw new Error("Failed to delete todo");
      }
    } catch (error) {
      console.error("Error", error);
    }
  },[])
    return deletePost;
}

export default useDelete;