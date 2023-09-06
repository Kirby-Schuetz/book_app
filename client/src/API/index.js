// fetch requests

const BASE_URL = `http://localhost:3000/api`;

// GET all posts
export async function fetchAllPosts() {
    try {
        const response = await fetch(`${BASE_URL}/posts`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log("No posts today, create one!", error);
        return error;
    }
}

// POST create a new post
export async function createPost(book_image, book_title, book_author, book_summary) {
    try {
        const response = await fetch(`${BASE_URL}/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                book_image,
                book_title,
                book_author,
                book_summary
            })
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}


// PUT edit a post

// DELETE a post
export async function deletePost(post_id) {
    try {
        const response = await fetch(`${BASE_URL}/posts/${post_id}`, {
            method: "DELETE"
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

// GET all posts by user_id
export async function fetchUserPosts(user_id) {
    try {
      //${user_id} comes from the front end and the URL
      const response = await fetch(`${BASE_URL}/users/${user_id}`);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  }

// POST create a new user
export async function createUser(username, first_name, last_name, password, email) {
    try {
        const response = await fetch(`${BASE_URL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                first_name,
                last_name,
                password,
                email
            })
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

// PUT edit a user

// DELETE a user
export async function deleteUser(user_id) {
    try {
      const response = await fetch(`${BASE_URL}/users/${user_id}`, {
        method: "DELETE"
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  }
