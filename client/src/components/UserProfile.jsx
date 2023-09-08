import { getPostsByUserId } from "../API";
import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import EditPost from "./EditPost";
// import DeletePost from "./DeletePost";

export default function UserProfile() {
    const [userData, setUserData] = useState([]);
    const [userPosts, setUserPosts] = useState([]);
    const navigate = useNavigate();
    // const reader = useSelector((state) => state.user_id);

    useEffect(() => {
        async function getUserProfile() {
                const response = await getPostsByUserId();
                if (response.success) {
                    setUserData(response.data.username);
                    setUserPosts(response.data.user_id);
                    } else {
                        console.error(response.error);
                        navigate("/LoginPage");
                }
        }
        getUserProfile();
    }, []);

    return (
        <div>
        {userData ? (
            <div>
                <h2>{userData.username}</h2>
                <h2>Posts:</h2>
                <ul>
                    {userPosts.map((post) => (
                        <div key={post.user_id}>
                        <img src={post.book_image} alt={post.book_title} />
                        <h3>{post.book_title}</h3>
                        <h3>{post.book_author}</h3>
                        <h3>{post.book_summary}</h3>
                        </div>
                    ))}
                </ul>
            </div>
        ) : (
            <p>Loading user data...</p>
        )}
   </div>
);
}


    
