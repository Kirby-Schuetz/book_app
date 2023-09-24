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
            <FormControl>
                <TextField
                    id="username-input-box"
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    id="password-input-box"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div>
                    <button onClick={handleLogin}>Sign in</button>
                </div>
            </FormControl>
            {/* <Link to="/CreateUserForm">Not a Bibliophile? Register here.</Link> */}
        </>  
    ); 
}