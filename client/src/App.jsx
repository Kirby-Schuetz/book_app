import React from "react";
import { Routes, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts";
import CreatePostForm from "./components/CreatePostForm";
import NavBar from "./components/NavBar";
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
          <Route path="/CreatePostForm" element={<CreatePostForm />} />
          {/* <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/CreateUserForm" element={<CreateUserForm />}/>
          <Route path="/EditPostForm" element={<EditPostForm />}/>
          <Route path="/EditUserForm" element={<EditUserForm />}/> */}
        </Routes>
        
      </LoginContextProvider>
      
    </>
  );
}

export default App;

