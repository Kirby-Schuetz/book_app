import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
import { FormControl, TextField } from "@mui/material";

export default function LogInPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(e) {
        e.preventDefault();
        console.log("handled button press")
        
    }
    
    return (
        <>
            
            {/* <Link to="/CreateUserForm">Not a Bibliophile? Register here.</Link> */}
        </>  
    ); 
}