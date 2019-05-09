const express = require('express');

const Users = require('./userDb');
const Posts = require('./postDb');
const upName = require('../middleware/upName');
const usersRouter = express.Router();
//Get users
usersRouter.get('/', async (req, res) => {
    try{
        const users = await Users.get(req.query);
        res.status(200).json({users});
    } catch (error) {
        res.status(500).json({ message: "Error retrieving users"});
    }
});
//Get Posts from User


//Add a User
usersRouter.post('/', upName, async(req,res) => {
    try{
        const users = await Users.add(req.body);
        res.status(201).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error adding user"});
    }
    });

// function upName(req, res, next) => {
//     const name = req.body.name;
//     const upName = req.body.name.toUppercase();
//     if (name === upName) {
//         next(); 
//     } else {
//         res.status(404).json({message: "Name needs to be capatilized!" })
//     }
//    };
//Delete a user
// usersRouter.delete('/:id', (req, res) => {
//     const userID = req.params.id;
//     res.status(200).json({})


//Edit a user


// 
module.exports = usersRouter;