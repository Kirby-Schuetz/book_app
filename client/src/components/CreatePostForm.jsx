import React, { useState } from "react";
import { CreatePost } from "../API";

export default function CreatePostForm({ posts, setPosts }) {
    const [book_image, setBook_Image] = useState("");
    const [book_title, setBook_Title] = useState("");
    const [book_author, setBook_Author] = useState("");
    const [book_summary, setBook_Summary] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        const APIData = await CreatePost(book_image, book_title, book_author, book_summary);
        if (APIData.success) {
            console.log("New Post: ", APIData.data.newPost);

            // resetting AllPosts manually
            const CreatePost = [...posts, APIData.data.newPost];
            setPosts(CreatePost);

            setBook_Image("");
            setBook_Title("");
            setBook_Author("");
            setBook_Summary("");
        } else {
            setError(APIData.error.message)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <input
            value={book_image}
            type="text"
            name="book_image"
            placeholder="Book Cover"
            onChange={(e) => setBook_Image(e.target.value)}
            />
            <input
            value={book_title}
            type="text"
            name="book_title"
            placeholder="Book Title"
            onChange={(e) => setBook_Title(e.target.value)}
            />
            <input
            value={book_author}
            type="text"
            name="book_author"
            placeholder="Author"
            onChange={(e) => setBook_Author(e.target.value)}
            />
            <input
            value={book_summary}
            type="text"
            name="book_summary"
            placeholder="Summary"
            onChange={(e) => setBook_Summary(e.target.value)}
            />
            <button>Post Book</button>
        </form>
    );
}