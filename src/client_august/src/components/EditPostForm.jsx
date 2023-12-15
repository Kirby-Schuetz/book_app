import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { editPost, getPostsByUserId } from "../API";
import { useNavigate } from "react-router-dom";
import { Card,  CardMedia, CardContent } from "@mui/material";
import { useLogin } from "../context/loginContext";


export default function EditUserPost() {
  const [isLoading, setIsLoading] = useState(true);
  const [userPosts, setUserPosts] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [postToEdit, setPostToEdit] = useState({
    book_image: "",
    book_title: "",
    book_author: "",
    book_summary: "",
  });
  const { userId, userName } = useLogin();
  const navigate = useNavigate();

  function handleEditFormClose() {
    setIsFormOpen(false);
}

  function handleEditFormOpen(post) {
    setPostToEdit({
      post_id: post.post_id,
      book_image: post.book_image,
      book_title: post.book_title,
      book_author: post.book_author,
      book_summary: post.book_summary,
    });
    setIsFormOpen(true);
  }

  async function handleEditFormSubmit() {
    try {
      const result = await editPost(postToEdit.post_id, postToEdit);
      console.log("Update post", result);
      // You may want to update the userPosts array with the edited post
      // after a successful update.
      setIsFormOpen(false); // Close the edit form after successful update
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function fetchUserPosts() {
      try {
        const response = await getPostsByUserId(userId);
        setUserPosts(response.posts);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
    fetchUserPosts();
  }, []);

  return (
    <div>
            {userPosts.map((post) => (
              <div key={post.post_id}>
                  <button onClick={() => handleEditFormOpen(post)}>Edit Post</button>
                {isFormOpen && (
                <>
                <div>
                    <h1>Edit Post</h1>
                    <TextField
                      id="NP-input-box"
                      value={postToEdit.book_image}
                      label="Image"
                      multiline
                      margin="normal"
                      fullWidth
                      onChange={(e) =>
                        setPostToEdit({
                          ...postToEdit,
                          book_image: e.target.value,
                        })
                      }
                    />
                    <TextField
                      id="NP-input-box"
                      value={postToEdit.book_title}
                      label="Title"
                      multiline
                      margin="normal"
                      fullWidth
                      onChange={(e) =>
                        setPostToEdit({
                          ...postToEdit,
                          book_title: e.target.value,
                        })
                      }
                    />
                    <TextField
                      id="NP-input-box"
                      value={postToEdit.book_author}
                      label="Author"
                      multiline
                      margin="normal"
                      fullWidth
                      onChange={(e) =>
                        setPostToEdit({
                          ...postToEdit,
                          book_author: e.target.value,
                        })
                      }
                    />
                    <TextField
                      id="NP-input-box"
                      value={postToEdit.book_summary}
                      label="Summary"
                      multiline
                      margin="normal"
                      fullWidth
                      onChange={(e) =>
                        setPostToEdit({
                          ...postToEdit,
                          book_summary: e.target.value,
                        })
                      }
                    />
                    <button onClick={handleEditFormSubmit}>Submit Changes</button>
                    </div>
                    </>
                )}
                  </div>
             
            ))}
           </div>
  )}
