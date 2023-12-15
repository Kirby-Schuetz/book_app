import { Routes, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts";
import CreatePostForm from "./components/CreatePostForm";
import CreateUserForm from "./components/CreateUserForm";
import EditPostForm from "./components/EditPostForm";
import EditUserForm from "./components/EditUserForm";
import NavBar from "./components/NavBar";
import UserProfile from "./components/UserProfile";
import { LoginContextProvider } from "./context/loginContext";
import "./App.css";
import LogInPage from "./components/LoginPage";

function App() {
  return (
    <>
      <LoginContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<AllPosts />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/postform" element={<CreatePostForm />} />
          <Route path="/users/:user_id/profile" element={<UserProfile />} />
          <Route path="/register" element={<CreateUserForm />} />
          <Route path="/posts/:post_id/edit" element={<EditPostForm />} />
          <Route path="/users/:user_id/edit" element={<EditUserForm />} />
        </Routes>
      </LoginContextProvider>
    </>
  );
}

export default App;
