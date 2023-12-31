import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { editUser, getUserByUserId } from "../API";
import { useNavigate } from "react-router-dom";
import { useLog } from "../context/loginContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function EditUserProfile() {
  const [userProfile, setUserProfile] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
  });

  const { userId, userName } = useLog();
  const navigate = useNavigate();

  function handleUserEditFormClose() {
    setIsFormOpen(false);
  }

  function handleEditUserFormOpen(user) {
    setUserToEdit({
      user_id: user.user_id,
      username: user.username,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
    });
  }
  async function handleEditUserFormSubmit() {
    try {
      const result = await editUser(userToEdit.user_id, userToEdit);
      console.log("Update user", result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function fetchUserByUserId() {
      try {
        const response = await getUserByUserId(userId);
        setUserProfile(response.users);
      } catch (e) {
        console.log(e);
      }
    }
    fetchUserByUserId();
  }, []);

  return (
    <div>
      <h1 className="pageheader">{userName} Profile</h1>
      <Card sx={{ maxWidth: 645 }}>
        <div key={userId.user.id}>
          <CardContent>
            <h3>{userId.username}</h3>
            <p>{userId.first_name}</p>
            <p>{userId.last_name}</p>
            <p>{userId.email}</p>
            <p>{userId.password}</p>
          </CardContent>
          <div>
            <button onClick={() => handleEditUserFormOpen(userId)}>
              Editing User Profile
            </button>
          </div>
        </div>
        {isFormOpen && userToEdit.user_id === userId.user_id ? (
          <div>
            <h1>Edit {userName} Profile</h1>
            <TextField
              id="NP-input-box"
              value={userToEdit.username}
              label="Username"
              multiline
              margin="normal"
              fullWidth
              onChange={(e) =>
                setUserToEdit({
                  ...userToEdit,
                  username: e.target.value,
                })
              }
            />
            <TextField
              id="NP-input-box"
              value={userToEdit.first_name}
              label="First Name"
              multiline
              margin="normal"
              fullWidth
              onChange={(e) =>
                setUserToEdit({
                  ...userToEdit,
                  first_name: e.target.value,
                })
              }
            />
            <TextField
              id="NP-input-box"
              value={userToEdit.last_name}
              label="Last Name"
              multiline
              margin="normal"
              fullWidth
              onChange={(e) =>
                setUserToEdit({
                  ...userToEdit,
                  last_name: e.target.value,
                })
              }
            />
            <TextField
              id="NP-input-box"
              value={userToEdit.email}
              label="Email"
              multiline
              margin="normal"
              fullWidth
              onChange={(e) =>
                setUserToEdit({
                  ...userToEdit,
                  email: e.target.value,
                })
              }
            />
            <TextField
              id="NP-input-box"
              value={userToEdit.password}
              label="Password"
              multiline
              margin="normal"
              fullWidth
              onChange={(e) =>
                setUserToEdit({
                  ...userToEdit,
                  pasword: e.target.value,
                })
              }
            />
            <button onClick={handleEditUserFormSubmit}>Submit Changes</button>
            <button onClick={handleUserEditFormClose}>Cancle</button>
          </div>
        ) : null}
      </Card>
    </div>
  );
}
