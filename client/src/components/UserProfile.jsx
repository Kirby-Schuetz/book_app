import { getPostsByUserId } from "../API";
import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../context/loginContext";

// import EditPost from "./EditPost";
// import DeletePost from "./DeletePost";

export default function UserProfile() {
    const [isLoading, setIsLoading] = useState(true);
    const [userPosts, setUserPosts] = useState([]);
    const { userId, userName } = useLogin();
    const navigate = useNavigate();
    // const reader = useSelector((state) => state.user_id);


    useEffect(() => {
        async function fetchUserPosts() {
            try {
                const response = await getPostsByUserId(userId);
                setUserPosts(response.posts);
                setIsLoading(false);
            } catch(e) {
                console.log(e);
            }
        }
        console.log("executing custom hook");
        fetchUserPosts()
    }, []);

    return (
        <div>
        {isLoading ? 
        (
            <p>Loading user data...{userId}</p>
        )
        :
        (
            <div>
                <h2>{userName}</h2>
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
        )
    }
   </div>
);
}


    
