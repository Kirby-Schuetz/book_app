// DISPLAYS HOME BUTTON->ALLPOSTS, SEARCH BAR, CREATE POST BUTTON->CREATPOST, USER PROFILE->USERPROFILE
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar"
// import UserProfile from ".UserProfile";
import CreatePostForm from "./CreatePostForm";


export default function NavBar() {
 
return (
        <nav className="navbar">
            <div>
            <Link to="/AllPosts">Home</Link>
            </div>
            <SearchBar/>
            <div></div>
            <Link to="/CreatePostForm">Post</Link>
            <div></div>
            <Link to="/UserProfile">Profile</Link>
        </nav>
    );
}
