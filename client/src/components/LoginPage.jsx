import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logIn } from "../API";
import { TextField, Button } from "@mui/material";


const LogInPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        const result = await logIn(username, password);
        console.log(username);
        console.log(password);

        alert("You are now logged into Bored Bibliophile. Your next reading adventure awaits you.");
        console.log(JSON.stringify(result));
        
        navigate.push("/AllPosts");
    }
    
    return (
        <div>
            <div className="form">
            <h2>Bibliophile Login:</h2>
            <form>
             <TextField
                label="Username"
                placeholder="Enter username"
                fullWidth
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
             <TextField
                label="Password"
                placeholder="Enter password"
                type="password"
                fullWidth
                required
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button
                type="submit"
                color="primary"
                variant="contained"
                fullWidth
                onClick={async () => {
                await handleLogin(e);
                }}
            >
                Sign in
            </Button>
            
            </form>
            </div>
        </div>
    );
        
};
export default LogInPage;