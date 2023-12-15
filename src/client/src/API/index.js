// fetch requests
const BASE_URL = "http://localhost:5497/api/";
// const BASE_URL = import.meta.env.VITE_API;



// GET all posts
export async function fetchAllPosts() {
  console.log("Fetching posts");  
  try {
      const response = await fetch(`${BASE_URL}/`);
      if (!response.ok) {
        throw new Error(`Failed to fetch posts. Status: ${response.status}`);
      }      const result = await response.json();
  
      return result;
    } catch (error) {
      console.log("Error fetching posts:", error);
      throw error; // Rethrow the error to let the calling code handle it
    }
  }

// POST create a new post
export async function createPost(postData) {
  console.log("API Client: ", postData);
  try {
    const response = await fetch(`${BASE_URL}/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(postData)
    });
    const result = await response.json();
    console.log(result);
    return result;
} catch (error) {
    console.log("Your book did not post. Try again!", error);
}
}

// GET post by post_id
export async function getPostByPostId(post_id) {
  try {
    //${id} comes from the front end and the URL
    const response = await fetch(`${BASE_URL}/${post_id}`);
    if (response.status === 204) {
      const result = await response.json();
      return result;
    }
    }catch (error) {
    console.error(error);
  }
}

// PUT edit a post
export const editPost = async (postEdits, post_id) => {
  try {
    const response = await fetch(`${BASE_URL}/${post_id}/edit/`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(postEdits)
    });
    if (response.status === 202) {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.log("Your post did not update. Try again!", error);
  }
}

// DELETE a post
export async function deletePost(post_id) {
    try {
        const response = await fetch(`${BASE_URL}/${post_id}/`, {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
              // 'Authorization': `Bearer ${token}`
            }
        });
        if (response.status === 201) {
          const result = await response.json();
          return result;
        }
        
    } catch (error) {
        console.log("Your post did not delete. Try again!", error);
    }
}

// GET all posts by user_id
export async function getPostsByUserId(user_id) {
    try {
      //${user_id} comes from the front end and the URL
      const response = await fetch(`${BASE_URL}/posts/${user_id}/`, {
        method: "GET",
      });

      if (response.status === 200) {
        const userPosts = await response.json();
        return userPosts;
      } else {
        console.log("Error fetching user profile: ", response.statusText);
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }

//   GET all users
export async function fetchUsers() {
    try {
      //${user_id} comes from the front end and the URL
      const response = await fetch(`${BASE_URL}/`);
 
      if (!response.ok) {
        throw new Error(`Failed to fetch users. Status: ${response.status}`);
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.log("Error fetching users:", error);
      throw error; // Rethrow the error to let the calling code handle it
    }
  }

// POST create a new user
export async function createUser(userData) {
  console.log("API Client: ", userData);
    try {
        const response = await fetch(`${BASE_URL}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });
        const result = await response.json();
        if(response.ok) {
          localStorage.setItem('jwt', result.token);
        } else {
          console.log("Your account was not created. Try again!")
        }
        return result;
    } catch (error) {
        console.log("Your account was not created. Try again!", error);
    }
}

// PUT edit a user
export const editUser = async (userEdits, user_id) => {
  try {
    const response = await fetch(`${BASE_URL}/${user_id}/`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(userEdits)
    });
    if (response.status === 207) {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.log("Your user profile did not update. Try again!", error);
  }
}

// GET user by user_id
export async function getUserByUserId(user_id) {
  try {
    //${id} comes from the front end and the URL
    const response = await fetch(`${BASE_URL}/${user_id}/`);
    if (response.status === 204) {
      const result = await response.json();
      return result;}
    }catch (error) {
    console.error(error);
  }
}

// DELETE a user
export async function deleteUser(user_id) {
    try {
      const response = await fetch(`${BASE_URL}/${user_id}/`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${token}`
      }
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  }

//   LOGIN
export async function logIn(username, password) {
  console.log("here");  
  try {
      const response = await fetch(`${BASE_URL}/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.log("You are not logged in. Try again!", error);
    }
  }

     // LOGOUT
     export const logout = async () => {

      const response = await fetch(`${BASE_URL}/logout/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Logout failed');
      }
    };