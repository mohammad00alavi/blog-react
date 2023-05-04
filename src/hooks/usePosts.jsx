import { useContext } from "react";
import BlogContext from "../Provider";

const usePosts = () => {
  return useContext(BlogContext);
}

export default usePosts;