// DISPLAYS HOME BUTTON->ALLPOSTS, SEARCH BAR, CREATE POST BUTTON->CREATPOST, USER PROFILE->USERPROFILE
import { Link } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import CreatePost from "./components/CreatePost";
import AllPosts from "./components/AllPosts";


export default function NavBar() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState("");

    const PostsToDisplay = searchParam
    ? posts.filter((post) =>
        post.name.toLowerCase().includes(searchParam)
      )
    : posts;

    return (
        <div>
            <Link to="/posts">Home</Link>
            <label> Search: {" "}<input type="text" placeholder="search" onChange={(e) => setSearchParam(e.target.value.toLowerCase())}/></label>
            <Link to="/" element={<CreatePost />} />
            <Link to="/users/${user_id}" element={<UserProfile />} /> 
        </div>
    );
        
}