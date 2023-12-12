import { useState } from "react";
import { TextField } from "@mui/material";
import { createPost } from "../API";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useLogin } from "../context/loginContext";
import { useNavigate, Navigate } from "react-router-dom";




export default function CreatePostForm({ token }) {
    const [posts, setPosts] = useState([]);
    const [postImage, setpostImage] = useState("");
    const [postTitle, setpostTitle] = useState("");
    const [postAuthor, setpostAuthor] = useState("");
    const [postSummary, setpostSummary] = useState("");
    const { isLoggedIn, userId } = useLogin();
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    

    const postData = {
        book_image: postImage,
        book_title: postTitle,
        book_author: postAuthor,
        book_summary: postSummary,
        user_id: userId
    };

    async function handleSubmit(e) {
        e.preventDefault();
        const APIData = await createPost(postData);
        console.log(APIData);
        navigate('/');
    }

return (
    <div>
        <div className="form">
            <h1 className="pageheader">Post a Book</h1>
            <Card sx={{ maxWidth: 645 }}>
        <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <TextField
                id="NP-input-box"
                value={postImage}
                label="Image"
                fullWidth
                margin="normal"
                multiline
                onChange={(e) => setpostImage(e.target.value)}
            />
            <CardContent>
            <TextField
                id="NP-input-box"
                value={postTitle}
                label="Title"
                multiline
                margin="normal"
                fullWidth
                onChange={(e) => setpostTitle(e.target.value)}
            />
            <TextField
                id="NP-input-box"
                value={postAuthor}
                label="Author"
                multiline
                margin="normal"
                fullWidth
                onChange={(e) => setpostAuthor(e.target.value)}
            />
            <TextField
                id="NP-input-box"
                value={postSummary}
                label="Summary"
                multiline
                margin="normal"
                fullWidth
                onChange={(e) => setpostSummary(e.target.value)}
            />
            </CardContent>
            {isLoggedIn ? null : <Navigate to="/login" replace={true} />}
            <button type="submit" id="np-button">Post Book</button>
        </form>
        </Card>
    </div>
    </div>
);
}
