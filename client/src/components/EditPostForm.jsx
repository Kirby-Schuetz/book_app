import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { editPost, getPostsByUserId, deletePost } from "../API";
import { useParams, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useLog, useLogin } from "../context/loginContext";

export default function EditUserPost() {
  const { post_id } = useParams();
  const [isDeleted, setIsDeleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userPosts, setUserPosts] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [postToEdit, setPostToEdit] = useState({
    book_image: "",
    book_title: "",
    book_author: "",
    book_summary: "",
  });
const { isLoggedIn } = useLog();
const [error, setError] = useState(null);
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

  const handleDelete = async (post_id) => {
    try {
      const response = await deletePost(post_id);
      console.log("Deleted", response);
      setIsDeleted(true);
    } catch (error) {
      console.error("Trouble deleting post. Try again!", error);
    }
  };

  useEffect(() => {
    async function fetchUserPosts() {
      try {
        const response = await getPostsByUserId(post_id);
        setUserPosts(response.posts);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
    fetchUserPosts();
  }, [post_id]);

  async function handleEditFormSubmit(e) {
    e.preventDefault();

    try {
      const result = await editPost(postToEdit.post_id, postToEdit);
      console.log("Updated post", result);
      alert("Post successfully edited!");
      setIsFormOpen(false); // Close the edit form after successful update
      const returnVal = result;
      return returnVal;
      // You may want to update the userPosts array with the edited post
      // after a successful update.
    } catch (error) {
      console.error("Trouble deleting post. Try again!", error);
    }
  }

  return (
    <div>
      {userPosts.map((post) => (
        <div key={post.post_id}>
          {isLoggedIn && ( 
          <button onClick={() => handleEditFormOpen(post)}>Edit Post</button>
          )}
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
                {isLoggedIn && ( 
                <button
                  className="button"
                  onClick={(e) => {
                    e.preventDefault();
                    const shouldDelete = window.confirm(
                      "Are you sure you want to delete this post?"
                    );
                    if (shouldDelete) {
                      handleDelete(post_id);
                      navigate("/blogs");
                    }
                  }}
                >
                  Delete
                </button>
                )}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
