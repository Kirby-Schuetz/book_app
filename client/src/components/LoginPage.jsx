import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { logIn } from "../API";
import { TextField } from "@mui/material";

export default function LogInPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
   
    const navigate = useNavigate();

    // get current userData from redux store
    // const dispatch = useDispatch();

    async function handleLogin(e) {
        e.preventDefault();
        const result = await logIn(username, password);
        console.log(username);
        console.log(password);

        alert("You are now logged into Bored Bibliophile. Your next reading adventure awaits you.");
        console.log(JSON.stringify(result));
        navigate("/AllPosts");
    }
    
    return (
        <div>
            <div className="form">
            <h2>Bibliophile Login:</h2>
            <form>
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
            <button onClick={handleLogin}>Sign in</button>
            </form>
            </div>
            <Link to="/CreateUserForm">Not a Bibliophile? Register here.</Link>
        </div>
    ); 
}