import { useState } from "react";
import { useNavigate, Link, Form } from "react-router-dom";
import { logIn } from "../API";
import { TextField } from "@mui/material";
import { useLogin } from "../context/loginContext";

export default function LogInPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setIsLoggedIn, setUserId, setUserName, setAuth } = useLogin();
    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const result = await logIn(username, password);
            
            if (result.success) {
                setIsLoggedIn(true);
                setUserId(result.user.user_id);
                setUserName(result.user.username);

                const token = result.token;
                setAuth({ token });
                localStorage.setItem("token", token);
                console.log("token")

                window.alert("Success!");
                navigate("/");
            } else {
                window.alert("Invalid username or password. Try again or create an account");
                navigate("/login");
            }

        } catch(e) {
            console.log(e);
        }
        
    }
    
    return (
        <div>
            <h1 className="pageheader">Bibliophile Login:</h1>
            <Form onSubmit={handleLogin}>
                <TextField
                    id="NP-input-box"
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    id="NP-input-box"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign in</button>
                <Link to="/createUser">Not a Bibliophile? Register here.</Link>
            </Form>
        </div>
    ); 
}