import React from "react";
import NavBar from "./components/NavBar";
import { LoginContextProvider } from "./context/loginContext";
import './App.css';
import LogInPage from "./components/LoginPage";


function App() {
 
  return (
    <>
      <LoginContextProvider>
        <NavBar />
        <LogInPage />
      </LoginContextProvider>
      
    </>
  );
}

export default App;

