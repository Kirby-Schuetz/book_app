// import express and invoke it to create a router
const express = require('express');
const router = express.Router();

// import the SQL helper function from 'db'
router.use('/users', require('./db/sqlHelperFunctions/users'));

// GET request for all users

// GET request for single user by id

// POST request to add a user

// PUT request to update user by id

// DELETE request to delete use by id


// export router
module.exports = router;