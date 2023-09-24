import React from "react";
import TestingComponent from "./components/TestingComponent";
import LogInPage from "./components/LoginPage";
import { LoginContextProvider } from "./context/loginContext";
import './App.css';


function App() {
 
  return (
    <>
      <TestingComponent />
      <LoginContextProvider>
        <LogInPage />
      </LoginContextProvider>
    </>
    
  );
}

export default App;

