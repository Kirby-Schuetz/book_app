import { Routes, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts";
import UserProfile from "./components/UserProfile";
import CreatePostForm from "./components/CreatePostForm";
import NavBar from "./components/NavBar";
import LoginPage from "./components/LoginPage";
import CreateUserForm from "./components/CreateUserForm";
import { LoginContextProvider } from "./context/loginContext";
// import Authentication from "./components/Authentication";
import './App.css';

function App() {
 
  return (
    <>
      <div>
        <div id="navbar"><NavBar /></div>
        <div className="main-section">
        <h1>Welcome to Bored Bibliophile</h1>
        <LoginContextProvider>
          <Routes>
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/AllPosts" element={<AllPosts />} />
            <Route path="/CreatePostForm" element={<CreatePostForm />} />
            <Route path="/UserProfile" element={<UserProfile />} />
            <Route path="/CreateUserForm" element={<CreateUserForm />}/>
            {/* <Route path="/Authentication" element={<Authentication />}/> */}
          </Routes>
        </LoginContextProvider>
        </div>
      </div>
    </>
  );
}

export default App;

