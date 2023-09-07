import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { logIn } from "../API";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuthenticated, login } from "../redux";


export default function LogInPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
   
    const navigate = useNavigate();

    // get current userData from redux store
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(selectIsAuthenticated);

    async function handleSubmit(e) {
        e.preventDefault();
        const result = await logIn(username, password);


         // dispatch login action to store user data and token in Redux
         dispatch(
            login({
                user: username,
                token: result.data.token,
            })
        );

        // if login returns a token with successful login
        if (result && result.data.token) {
           
        alert("You are now logged into Bored Bibliophile. Your next reading adventure awaits you.");
    
        navigate("/AllPosts");
    } else {
        console.error("Login failed");
    }
    }

    // check if the user is authenticated and redirect if necessary
    if (isAuthenticated) {
        return null;
    }
    
    return (
        <div>
            <div className="form">
            <h2>Bibliophile Login:</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
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
            <button>Sign in</button>
            </form>
            </div>
            <Link to="/CreateUserForm">Not a Bibliophile? Register here.</Link>
        </div>
    ); 
}