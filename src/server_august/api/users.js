// import express and invoke it to create a router
const express = require('express');
const router = express.Router();
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const { JWT_SECRET, COOKIE_SECRET } = require('../secrets');
// const SALT_ROUNDS = 10;
// const { authRequired } = require("./utils");

// import the user SQL helper function from 'db' folder
const { createUser, getAllUsers, getUserById, updateUser, deleteUser, loginUser } = require('../db/sqlHelperFunctions/users');

// GET request for all users
router.get('/', async (req, res, next) => {
    try{
        const users = await getAllUsers();
        res.send(users);
    } catch (error) {
        next(error);
    }
});

// GET request for single user by id
router.get('/:username', async (req, res, next) => {
    try{
        const user = await getUserById(req.params.username);
        res.send(user);
    } catch (error) {
        next(error);
    }
});

// GET user login
router.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body.user;
  
      if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required.' });
      }
      const user = await loginUser(username, password);
  
      if (user) {
        // Successful login
        return res.status(200).json({ success: true, user });
      } else {
        // Failed login
        return res.status(401).json({ error: 'Invalid username or password.' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      return res.status(500).json({ error: 'An error occurred during login.' });
    }
  });

// POST request to create a new user
router.post('/', async (req, res, next) => {
    try{
        const user = await createUser(req.body);
        res.send(user);
    } catch (error) {
        next(error);
    }
});

// PUT request to update user from /api/users/"user_id"
router.put('/:user_id', async (req, res, next) => {
    try{
        const user = await updateUser(req.params.user_id, req.body);
        res.send(user);
    } catch (error) {
        next(error);
    }
});

// DELETE request to delete user from /api/users/"use_id"
router.delete('/:user_id', async (req, res, next) => {
    try{
        const user = await deleteUser(req.params.user_id);
        res.send(user);
    } catch (error) {
        next(error);
    }
});

// export router
module.exports = router;