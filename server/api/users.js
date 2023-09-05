// import express and invoke it to create a router
const express = require('express');
const router = express.Router();

// import the user SQL helper function from 'db' folder
const { createUser, getAllUsers, getUserById, updateUser, deleteUser } = require('../db/sqlHelperFunctions/users');

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
router.get('/:user_id', async (req, res, next) => {
    try{
        const user = await getUserById(req.params.user_id);
        res.send(user);
    } catch (error) {
        next(error);
    }
});

// POST request to add a new user
router.post('/', async (req, res, next) => {
    try{
        const user = await createUser(req.body);
        res.send(user);
    } catch (error) {
        next(error);
    }
});

// PUT request to update user by id
router.put('/:user_id', async (req, res, next) => {
    try{
        const user = await updateUser(req.params.user_id, req.body);
        res.send(user);
    } catch (error) {
        next(error);
    }
});

// DELETE request to delete use by id
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