import React from "react";
// import { Routes, Route } from "react-router-dom";
// import AllPosts from "./components/AllPosts";
// import UserProfile from "./components/UserProfile";
// import CreatePostForm from "./components/CreatePostForm";
// import NavBar from "./components/NavBar";
import LoginPage from "./components/LoginPage";
// import CreateUserForm from "./components/CreateUserForm";
// import EditPostForm from "./components/EditPostForm";
// import EditUserForm from "./components/EditUserForm";
// import { LoginContextProvider } from "./context/loginContext";
// import { useState } from 'react';
import './App.css';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

function App() {
  // const [token, setToken] = useState(null);
 
  return (
    <>
      <h1>What the hell?</h1>
      <h2>Seriously?</h2>
      {/* <LoginPage /> */}
      {/* <div>
        <div className="main-section">
        <h1>Welcome to Bored Bibliophile</h1>
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
          <LoginContextProvider>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/" element={<AllPosts />} />
              <Route path="/CreatePostForm" element={<CreatePostForm />} />
              <Route path="/UserProfile" element={<UserProfile />} />
              <Route path="/CreateUserForm" element={<CreateUserForm />}/>
              <Route path="/EditPostForm" element={<EditPostForm />}/>
              <Route path="/EditUserForm" element={<EditUserForm />}/>
            </Routes>
          </LoginContextProvider>
        </div>
      </div> */}
    </>
  );
}

export default App;

