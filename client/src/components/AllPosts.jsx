
import { useState, useEffect } from "react";
import { fetchAllPosts } from "../API/";
import CreatePostForm from "./CreatePostForm";


export default function AllPosts() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    let [searchParam, setSearchParam] = useState("");

    useEffect(() => {
        async function getAllPosts() {
            const APIResponse = await fetchAllPosts();
            if (APIResponse.success) {
                setPosts(APIResponse.data.posts);
            } else {
                setError(APIResponse.error.message);
            }
        }
        getAllPosts();
    }, []);

    const postsToDisplay = searchParam
    ? posts.filter((post) => post.title.toLowerCase().includes(searchParam))
    : posts;

    return (

        <div className="all-posts">
            <h2> Book Postings </h2>
            <ol>
                {postsToDisplay.map((post) => {
                    return <Item key={post_id} post={post} />;
                })}
            </ol>
        </div>
    );
}

