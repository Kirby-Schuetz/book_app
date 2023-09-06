// DISPLAYS HOME BUTTON->ALLPOSTS, SEARCH BAR, CREATE POST BUTTON->CREATPOST, USER PROFILE->USERPROFILE
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar"
// import UserProfile from ".UserProfile";
// import CreatePost from ".CreatePost";


export default function NavBar() {
 
return (
        <div>
            <Link to="/posts">Home</Link>
            <SearchBar/>
            {/* <Link to="/" element={<CreatePost />} />
            <Link to="/users/${user_id}" element={<UserProfile />} />  */}
            
           
             
            </div>
             )}
