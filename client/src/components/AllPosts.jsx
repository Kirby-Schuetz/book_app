// DISPLAYS NAV BAR & ALL OF THE POSTS
import { useState, useEffect } from "react";
import { fetchAllPosts } from "../API";
import { fetchUsers } from "../API";
import { Card, CardMedia, CardContent } from "@mui/material";

export default function AllPosts() {
    // useState & useEffect
const [posts, setPosts] = useState([]);
const [userIdToUsernameMap, setUserIdToUsernameMap] = useState({});

useEffect(() => {
    // Fetch all posts
    async function fetchData() {
      console.log("Fetching data...useEffect hook");
      const posts = await fetchAllPosts();
      setPosts(posts);
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
        <div >
          <h1 className="pageheader">Library</h1>
        {posts.map((post) => (
          <div key={post.post_id} className="gallery">
            <Card sx={{ maxWidth: 645 }}>
            <h3>{userIdToUsernameMap[post.user_id]}</h3>
            <CardMedia>
            <img src={post.book_image} alt={post.book_title} />
            </CardMedia>
            <CardContent>
            <h2>{post.book_title}</h2>
            <p>by, {post.book_author}</p>
            <p>{post.book_summary}</p>
            </CardContent>
            </Card>
          </div>
        ))}
      </div>
      </>
    );
}

{/* PropsType to futher investigate the props validation warning */}
