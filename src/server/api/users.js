const express = require('express');
const router = express.Router();
const authenticate = require('./auth');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../secrets');

// import the user SQL helper function from 'db' folder
const { createUser, getAllUsers, getUserById, updateUser, deleteUser, loginUser } = require('../db/sqlHelperFunctions/users');

// GET request for all users
router.get('/users', async (req, res, next) => {
    try{
        const users = await getAllUsers();
        res.send(users);
    } catch (error) {
        next(error);
    }
});

// GET request for single user by id
router.get('/:user_id', async (req, res, next) => {
    try{
        const user = await getUserById(req.params.username);
        res.send(user);
    } catch (error) {
        next(error);
    }
});

// GET user login
router.post('/login', authenticate, async (req, res) => {
    try {
      const { username, password } = req.body.user;
  
      if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required.' });
      }
      const user = await loginUser(username, password);
  
      if (user) {
        // Successful login
        const token = jwt.sign({ userId: user.user_id }, JWT_SECRET, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true, maxAge: 3600000 }); // 1 hour expiration
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

  // GET user logout

  router.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ success: true });
  });
  
  router.get('/', (req, res) => {
    console.log("here");
  })  

// POST request to create a new user
router.post('/users', async (req, res, next) => {
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