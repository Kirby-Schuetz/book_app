// DISPLAYS HOME BUTTON->ALLPOSTS, SEARCH BAR, CREATE POST BUTTON->CREATPOST, USER PROFILE->USERPROFILE
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useLog } from "../context/loginContext";

export default function NavBar() {
  const { isLoggedIn } = useLog();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <nav className="navbar">
        <AppBar position="static" sx={{ backgroundColor: "#242424" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">Home</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/createPost">Post</Link>
            </Typography>
            <SearchBar />
            {isLoggedIn ? (
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle>
                  <Link to="/user"></Link>
                </AccountCircle>
              </IconButton>
            ) : (
              <Button color="inherit">
                <Link to="/login">Login</Link>
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </nav>
    </Box>
  );
}
