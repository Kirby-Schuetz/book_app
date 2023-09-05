import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import AllPosts from "./components/AllPosts";
import NavBar from "./components/NavBar";
import './App.css'

function App() {

  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <>
      <div>
        <h1>Welcome Bibliophile</h1>
      </div>
      <div id="navbar">
        <NavBar />
        <div className="main-section">
          <Routes>
  
            <Route path="/AllPosts" element={<AllPosts />} />
            </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

