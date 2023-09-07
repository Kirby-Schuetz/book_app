import { useState } from "react";
import { createUser } from "../API";
import { fetchAllUsers } from "../API";


export default function CreateUserForm({ users, setUsers }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  async function handlePost(e) {
    // prevents browser from reloading page
    e.preventDefault();
    const postData = {
      username: username,
      password: password,
      first_name: first_name,
      last_name: last_name,
      email: email,
    };

    try {
      const APIData = await createUser(postData);
      console.log(APIData);
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
  }

  return (
    <div>
      <div className="form">
        <h2>Create a Bibliphile Account:</h2>
        <form onSubmit={handlePost}>
          {error && <p>{error}</p>}
          <input
            value={username}
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            value={password}
            type="text"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            value={first_name}
            type="text"
            name="first_name"
            placeholder="First Name"
            onChange={(e) => setFirst_Name(e.target.value)}
          />
          <input
            value={last_name}
            type="text"
            name="last_name"
            placeholder="Last Name"
            onChange={(e) => setLast_Name(e.target.value)}
          />
          <input
            value={email}
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>Submit</button>
          <button onClick={() => window.location.reload(true)}>Refresh</button>
        </form>
      </div>
    </div>
  );
}
