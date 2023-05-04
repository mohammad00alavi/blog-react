import { useCallback } from "react"

const usePostEdit = () => {
  const editPost = useCallback((post, id) => 
    {
      fetch (`https://blog-react-789c5-default-rtdb.europe-west1.firebasedatabase.app/blogPosts/${id}.json`, 
      {
        method: 'PUT',
        body: JSON.stringify(post),
        headers: {
          'Content-type': 'application/json'
        },
      })
      .catch((error) => {
        console.log('Error: ', error)
      })
    },[])
    return editPost;
}

export default usePostEdit;