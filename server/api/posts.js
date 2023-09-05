// import express and invoke it to create a router
const express = require('express');
const router = express.Router();

// import the user SQL helper function from 'db' folder
const { createPost, getAllPosts, getPostById, updatePost, deletePost } = require('../db/sqlHelperFunctions/posts');

// GET request for all posts
router.get('/', async (req, res, next) => {
    try{
        const posts = await getAllPosts();
        res.send(posts);
    } catch (error) {
        next(error);
    }
});

// GET request for single post by id
router.get('/:post_id', async (req, res, next) => {
    try{
        const post = await getPostById(req.params.post_id);
        res.send(post);
    } catch (error) {
        next(error);
    }
});

// POST request to add a new post
router.post('/', async (req, res, next) => {
    try{
        const post = await createPost(req.body);
        res.send(post);
    } catch (error) {
        next(error);
    }
});

// PUT request to update post from /api/posts/"post_id"
router.put('/:post_id', async (req, res, next) => {
    try{
        const post = await updatePost(req.params.post_id, req.body);
        res.send(post);
    } catch (error) {
        next(error);
    }
});

// DELETE request to delete post from /api/posts/"post_id"
router.delete('/:post_id', async (req, res, next) => {
    try{
        const post = await deletePost(req.params.post_id);
        res.send(post);
    } catch (error) {
        next(error);
    }
});

// export router
module.exports = router;