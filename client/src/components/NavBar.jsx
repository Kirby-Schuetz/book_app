// DISPLAYS HOME BUTTON->ALLPOSTS, SEARCH BAR, CREATE POST BUTTON->CREATPOST, USER PROFILE->USERPROFILE
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar"
// import UserProfile from ".UserProfile";
import CreatePostForm from "./CreatePostForm";


export default function NavBar() {
 
return (
        <nav className="navbar">
            <Link to="/LoginPage">Home</Link>
            <SearchBar/>
            <Link to="/AllPosts">Library</Link>
            <Link to="/CreatePostForm">Post</Link>
            <Link to="/UserProfile">Profile</Link>
        </nav>
    );
}
