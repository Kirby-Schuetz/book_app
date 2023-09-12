import { Routes, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts";
import UserProfile from "./components/UserProfile";
import CreatePostForm from "./components/CreatePostForm";
import NavBar from "./components/NavBar";
import LoginPage from "./components/LoginPage";
import CreateUserForm from "./components/CreateUserForm";
import EditPostForm from "./components/EditPostForm";
import EditUserForm from "./components/EditUserForm";
import { LoginContextProvider } from "./context/loginContext";
import { useState } from 'react';

import './App.css';

function App() {
  const [token, setToken] = useState(null);
 
  return (
    <>
      <div>
        <div id="navbar"><NavBar /></div>
        <div className="main-section">
        <h1>Welcome to Bored Bibliophile</h1>
        <LoginContextProvider>
          <Routes>
            <Route path="/LoginPage" element={<LoginPage setToken={setToken}/>} />
            <Route path="/AllPosts" element={<AllPosts token={token}/>} />
            <Route path="/CreatePostForm" element={<CreatePostForm token={token}/>} />
            <Route path="/UserProfile" element={<UserProfile token={token}/>} />
            <Route path="/CreateUserForm" element={<CreateUserForm setToken={setToken}/>}/>
            <Route path="/EditPostForm" element={<EditPostForm token={token}/>}/>
            <Route path="/EditUserForm" element={<EditUserForm token={token}/>}/>
          </Routes>
        </LoginContextProvider>
        </div>
      </div>
    </>
  );
}

export default App;

