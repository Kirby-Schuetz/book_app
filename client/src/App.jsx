import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import AllPosts from "./components/AllPosts";
import UserProfile from "./components/UserProfile";
import CreatePostForm from "./components/CreatePostForm";
import NavBar from "./components/NavBar";
import LoginPage from "./components/LoginPage";
import './App.css';

function App() {
  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <>
      <div>
        <div id="navbar"><NavBar /></div>
        <div className="main-section">
        <h1>Welcome to Bored Bibliophile</h1>
          <Routes>
            <Route path="/" element={!loggedIn && <LoginPage setLoggedIn={setLoggedIn}/>} />
            <Route path="/AllPosts" element={<AllPosts />} />
            <Route path="/CreatePostForm" element={<CreatePostForm />} />
            <Route path="/UserProfile" element={<UserProfile />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

