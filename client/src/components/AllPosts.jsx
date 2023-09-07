// DISPLAYS NAV BAR & ALL OF THE POSTS
import { useState, useEffect } from "react";
import { fetchAllPosts } from "../API";
import { fetchUsers} from "../API"

export default function AllPosts() {
    // useState & useEffect
const [AllPosts, setAllPosts] = useState([]);
const [userIdToUsernameMap, setUserIdToUsernameMap] = useState({});

useEffect(() => {
    // Fetch all posts
    async function fetchData() {
      const posts = await fetchAllPosts();
      setAllPosts(posts);
    }

    // Fetch users and create the userIdToUsernameMap
    async function fetchUsername() {
      const usersData = await fetchUsers(); 
      const map = usersData.reduce((acc, user) => {
        acc[user.user_id] = user.username;
        return acc;
      }, {});
      setUserIdToUsernameMap(map);
    }

    fetchData();
    fetchUsername();
  }, []);

    return (
        <>
        <div>
        {AllPosts.map((post) => (
          <div key={post.post_id}>
            <p>{userIdToUsernameMap[post.user_id]}</p>
            <img src={post.book_image} alt={post.book_title} />
            <p>Title: {post.book_title}</p>
            <p>Author: {post.book_author}</p>
            <p>Summary: {post.book_summary}</p>

          </div>
        ))}
      </div>
      </>
    );
}

{/* PropsType to futher investigate the props validation warning */}
