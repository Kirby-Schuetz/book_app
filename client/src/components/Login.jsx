import React, { useState } from 'react';
import { TextField } from "@mui/material/TextField";
import { FormControl } from '@mui/material/FormControl';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(e) {
        e.preventDefault();
        console.log("handled button press");
        
    }

    return (
        <div>
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
        </div>
    );
}

export default Login;