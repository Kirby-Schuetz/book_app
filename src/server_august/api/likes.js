// import express and invoke it to create a router
const express = require('express');
const router = express.Router();

// import the user SQL helper function from 'db' folder
const { createLike, getAllLikes, unLike } = require('../db/sqlHelperFunctions/likes');

// GET request for all likes
router.get('/', async (req, res, next) => {
    try{
        const likes = await getAllLikes();
        res.send(likes);
    } catch (error) {
        next(error);
    }
});


// POST request to add a new like
router.post('/', async (req, res, next) => {
    try{
        const like = await createLike(req.body);
        res.send(like);
    } catch (error) {
        next(error);
    }
});

// DELETE request to delete like from /api/likes/"like_id"
router.delete('/:like_id', async (req, res, next) => {
    try{
        const like = await unLike(req.params.like_id);
        res.send(like);
    } catch (error) {
        next(error);
    }
});

// export router
module.exports = router;