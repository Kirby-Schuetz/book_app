// DISPLAYS NAV BAR & ALL OF THE POSTS
import { useState, useEffect } from "react";
import { fetchAllPosts } from "../API";

export default function AllPosts() {
    // useState & useEffect
const [AllPosts, setAllPosts] = useState([]);


useEffect(() => {
  async function fetchData() {
    const posts = await fetchAllPosts();
    setAllPosts(posts);
    console.log(posts);
    return posts;
  }
  fetchData();
},[]);

    return (
        <>
        <ul>
        {AllPosts.map((post) => (
          <li key={post.id}>post={post}</li>
        ))}
      </ul>
      </>
    );
}

{/* PropsType to futher investigate the props validation warning */}
