import { useState } from "react";
import { createUser } from "../API";
import { TextField } from "@mui/material";
import { Card, CardHeader, CardMedia, CardContent } from "@mui/material";




export default function CreateUserForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);


    const userData = {
      username: username,
      password: password,
      first_name: first_name,
      last_name: last_name,
      email: email,
    };

    async function handleSubmit(e) {
      // prevents browser from reloading page
      e.preventDefault();
      console.log("Handler function: ", userData);
      const APIData = await createUser(userData);
      console.log(APIData);
  
  }

  return (
    <div>
      <div className="form">
        <h2>Create a Bibliphile Account:</h2>
        <Card sx={{ maxWidth: 645 }}>
        <form onSubmit={handleSubmit}>
          {error && <p>{error}</p>}
          <CardContent>
          <TextField
            id="NP-input-box"
            value={username}
            label="Username"
            multiline
            margin="normal"
            fullWidth
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="NP-input-box"
            value={password}
            label="Password"
            multiline
            margin="normal"
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            id="NP-input-box"
            value={first_name}
            label="FirstName"
            multiline
            margin="normal"
            fullWidth
            onChange={(e) => setFirst_Name(e.target.value)}
          />
          <TextField
            id="NP-input-box"
            value={last_name}
            label="LastName"
            multiline
            margin="normal"
            fullWidth
            onChange={(e) => setLast_Name(e.target.value)}
          />
          <TextField
            id="NP-input-box"
            value={email}
            label="Email"
            multiline
            margin="normal"
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />
          </CardContent>
          <button>Submit</button>
        </form>
        </Card>
      </div>
    </div>
  );
}
