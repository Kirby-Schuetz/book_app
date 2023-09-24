import React from "react";
import { Routes, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts";
import CreatePostForm from "./components/CreatePostForm";
import CreateUserForm from "./components/CreateUserForm";
import EditPostForm from "./components/EditPostForm";
import EditUserForm from "./components/EditUserForm";
import NavBar from "./components/NavBar";
import UserProfile from "./components/UserProfile";
import { LoginContextProvider } from "./context/loginContext";
import './App.css';
import LogInPage from "./components/LoginPage";


function App() {
 
  return (
    <>
      <LoginContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<AllPosts />} />
          <Route path="/login" element={<LogInPage />} /> 
          <Route path="/createPost" element={<CreatePostForm />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/createUser" element={<CreateUserForm />}/>
          <Route path="/EditPostForm" element={<EditPostForm />}/>
          <Route path="/EditUserForm" element={<EditUserForm />}/>
        </Routes>
        
      </LoginContextProvider>
      
    </>
  );
}

export default App;

