// import { Routes, Route } from "react-router-dom";
// import AllPosts from "./components/AllPosts";
// import UserProfile from "./components/UserProfile";
// import CreatePostForm from "./components/CreatePostForm";
import NavBar from "./components/NavBar";
// import LoginPage from "./components/LoginPage";
// import CreateUserForm from "./components/CreateUserForm";
// import EditPostForm from "./components/EditPostForm";
// import EditUserForm from "./components/EditUserForm";
import { LoginContextProvider } from "./context/loginContext";
// import { useState } from 'react';

import './App.css';

function App() {
  // const [token, setToken] = useState(null);
 
  return (
    <>
      <div>
        <div id="navbar"><NavBar /></div>
        <div className="main-section">
        <h1>Welcome to Bored Bibliophile</h1>
        {/* <LoginContextProvider>
          <Routes>
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/" element={<AllPosts />} />
            <Route path="/CreatePostForm" element={<CreatePostForm />} />
            <Route path="/UserProfile" element={<UserProfile />} />
            <Route path="/CreateUserForm" element={<CreateUserForm />}/>
            <Route path="/EditPostForm" element={<EditPostForm />}/>
            <Route path="/EditUserForm" element={<EditUserForm />}/>
          </Routes>
        </LoginContextProvider> */}
        </div>
      </div>
    </>
  );
}

export default App;

