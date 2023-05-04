import { useCallback } from "react"

const useWritePosts = () => {
  const writePosts = useCallback((post) => 
    {
      fetch ('https://blog-react-789c5-default-rtdb.europe-west1.firebasedatabase.app/blogPosts.json', 
      {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
          'Content-type': 'application/json'
        },
      })
      .catch((error) => {
        console.log('Error: ', error)
      })
    },[])
    return writePosts;
}

export default useWritePosts;