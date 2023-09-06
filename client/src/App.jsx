import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import AllPosts from "./components/AllPosts";
// import UserProfile from "./components/UserProfile";
// import CreatePost from "./components/CreatePost";
// import NavBar from "./components/NavBar";
import './App.css'

function App() {

  return (
    <>
      <div className="App">

        {/* <div id="navbar"><NavBar /></div> */}
        
        <h1>Welcome to Bored Bibliophile</h1>
    
     
        
        <div className="main-section">
          <Routes>
  
            <Route path="/" element={<AllPosts />} />
            {/* <Route path="/" element={<CreatePost />} />
            <Route path="/users/${user_id}" element={<UserProfile />} /> */}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

