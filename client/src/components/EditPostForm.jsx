import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { editPost, getPostsByUserId } from "../API";
import { useNavigate } from "react-router-dom";
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
      {isLoading ? (
        <p>Loading user data...{userId}</p>
      ) : (
        <div>
          <h2>{userName}</h2>
          <h2>Posts:</h2>
          <ul>
            {userPosts.map((post) => (
              <div key={post.post_id}>
                <img src={post.book_image} alt={post.book_title} />
                <h3>{post.book_title}</h3>
                <h3>{post.book_author}</h3>
                <h3>{post.book_summary}</h3>
                <div>
                  <button onClick={() => handleEditFormOpen(post)}>
                    Editing Post
                  </button>
                </div>
                {isFormOpen && postToEdit.post_id === post.post_id ? (
                  <div>
                    <h1>Edit Post</h1>
                    <TextField
                      id="NP-input-box"
                      value={postToEdit.book_image}
                      label="Image"
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
                      onChange={(e) =>
                        setPostToEdit({
                          ...postToEdit,
                          book_summary: e.target.value,
                        })
                      }
                    />
                    <button onClick={handleEditFormSubmit}>
                      Submit Changes
                    </button>
                    <button onClick={handleEditFormClose}>Cancel</button>
                  </div>
                ) : null}
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
