const express = require('express');

const Users = require('./userDb');
const Posts = require('./postDb');

const usersRouter = express.Router();

usersRouter.get('/', async (req, res) => {
    try{
        const users = await Users.get(req.query);
        res.status(200).json({users});
    } catch (error) {
        res.status(500).json({ message: "Error retrieving users"});
    }
});


module.exports = usersRouter;