// import express and invoke it to create a router
const express = require('express');
const router = express.Router();

// import the SQL helper function from 'db'
router.use('/likes', require('./db/sqlHelperFunctions/likes'));

// GET request for all likes

// GET request for single like by id

// POST request to add a like

// PUT request to update like by id

// DELETE request to delete like by id

// export router
module.exports = router;