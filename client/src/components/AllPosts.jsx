// DISPLAYS NAV BAR & ALL OF THE POSTS
import { useState, useEffect } from "react";
import { fetchAllPosts, fetchUsers } from "../API";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useLog } from '../Context/LoginContext';
import { Link, useNavigate } from "react-router-dom";

export default function AllPosts() {
const { isLoggedIn } = useLog();
const [posts, setPosts] = useState([]);
const [error, setError] = useState(null);
const [isLoading, setIsLoading] = useState(true);
const [userIdToUsernameMap, setUserIdToUsernameMap] = useState({});
const navigate = useNavigate();

useEffect(() => {
    // Fetch all posts
    async function fetchData() {

    try {
      const storedPosts = await fetchAllPosts();
      console.log(storedPosts);
      setPosts(storedPosts);
    } catch (error) {
      setError(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
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
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
        <div >
          <h1 className="pageheader">Library</h1>
          {posts.map((post) => (
            <div key={post.post_id} className="gallery">
              <Card sx={{ maxWidth: 645 }}>
              < h3>{userIdToUsernameMap[post.user_id]}</h3>
              <CardMedia>
                <img src={post.book_image} alt={post.book_title} />
              </CardMedia>
              <CardContent>
                <h2>{post.book_title}</h2>
                <p>by, {post.book_author}</p>
                <p>{post.book_summary}</p>
              </CardContent>
              {isLoggedIn && (
                <button>
                  <Link to={`/posts/${post.post_id}/edit`}>Edit Post</Link>
                </button>
              )}
              </Card>
            </div>
          ))}
      </div>
        )}
      </>
    );
}