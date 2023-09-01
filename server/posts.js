// import express and invoke it to create a router
const express = require('express');
const router = express.Router();

// import the SQL helper function from 'db'
router.use('/posts', require('./db/sqlHelperFunctions/posts'));

// GET request for all posts

// GET request for single post by id

// POST request to add a post

// PUT request to update post by id

// DELETE request to delete post by id

// export router
module.exports = router;