const BASE_URL = `http://localhost:3000/api/`;

// GET all posts
export async function fetchAllPosts() {
    try {
        const response = await fetch(`${BASE_URL}/posts`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log("No posts today, create one!", error)
    }
}

// POST create a new post



// PUT edit a post

// DELETE a post

// GET all posts by user_id

// POST create a new user

// PUT edit a user

// DELETE a user

