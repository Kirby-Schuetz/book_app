// fetch requests
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
export async function createPost(postData) {
  console.log("API Client: ", postData);
  try {
    const response = await fetch(`${BASE_URL}/posts/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
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
        console.log("Your post did not delete. Try again!", error);
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

//   GET all users
export async function fetchUsers() {
    try {
      //${user_id} comes from the front end and the URL
      const response = await fetch(`${BASE_URL}/users/`);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  }

// POST create a new user
export async function createUser(username, first_name, last_name, password, email) {
    try {
        const response = await fetch(`${BASE_URL}/users/register`, {
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
        console.log("Your book did not post. Try again!", error);
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

//   LOGIN
export async function logIn(username, password) {
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
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