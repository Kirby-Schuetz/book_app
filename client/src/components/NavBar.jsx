// DISPLAYS HOME BUTTON->ALLPOSTS, SEARCH BAR, CREATE POST BUTTON->CREATPOST, USER PROFILE->USERPROFILE
// import { Link } from "react-router-dom";
// import SearchBar from "./SearchBar"
// import UserProfile from ".UserProfile";


// export default function NavBar() {
 
// return (
//         <nav className="navbar">
//             {/* <Link to="/LoginPage">Home</Link> */}
//             {/* <SearchBar/> */}
//             {/* <Link to="/">Library</Link> */}
//             {/* <Link to="/CreatePostForm">Post</Link>
//             <Link to="/UserProfile">Profile</Link> */}
//         </nav>
//     );
// }

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
