import { getPostsByUserId, deletePost } from "../API";
import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useLogin } from "../context/loginContext";
import { Card, CardHeader, CardMedia, CardContent, Button } from "@mui/material";


export default function UserProfile() {
    const [isLoading, setIsLoading] = useState(true);
    const [userPosts, setUserPosts] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const { userId, userName } = useLogin();
    const navigate = useNavigate();
    // const reader = useSelector((state) => state.user_id);
    
    function handleEditFormClose() {
        setIsFormOpen(false);
    }

    function handleEditFormOpen() {
        setIsFormOpen(true);
    }
    async function handleDelete(post_id) {
            try {
                const result = await deletePost(post_id);
                console.log("Delete post", result);
                setUserPosts(userPosts.filter(post => post.post_id !== post_id));
            } catch (error) {
                console.log(error)
            }
    }

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
            <div className="gallery">
                <h1 className="pageheader">{userName} Posts:</h1>
                <ul>
                <Card sx={{ maxWidth: 645 }}>
                    {userPosts.map((post) => (
                        <>
                            <div key={post.user_id} className="userposts">
                                <CardMedia>
                            <img src={post.book_image} alt={post.book_title} />
                            </CardMedia>
                            <CardContent>
                            <h3>{post.book_title}</h3>
                            <p>{post.book_author}</p>
                            <p>{post.book_summary}</p>
                            </CardContent>
                            </div>
                           
                            <div>
                                <button onClick={() => handleDelete(post.post_id)}>Delete Post</button>
                            </div>
                            <></>
                            <div>
                                <button onClick={handleEditFormOpen}>Edit Post</button>
                            </div>
                            {isFormOpen ? 
                                <><Link to="/EditPostForm">Continue to edit post</Link><>
                                    <div>
                                        <button onClick={handleEditFormClose}>Cancel</button>
                                    </div>
                                </></>
                                
                                :
                                null
                            }
                        </>
                    ))}
                     </Card>
                </ul>
            </div>
        )
    }
   </div>
);
}


    
