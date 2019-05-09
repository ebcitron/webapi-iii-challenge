// Pull in posts/users and set up express 
const express = require('express');
const helmet = require('helmet');

const postsRouter = require('./data/helpers/postsRouter');
const usersRouter = require('./data/helpers/usersRouter');



const server = express();;
server.use(express.json());
server.use(helmet());



// write name case middleware
const upName =(req, res, next) => {
    const name = req.body.name;
    const upName = req.body.name.toUppercase();
    if (name === upName) {
        next(); 
    } else {
        res.status(404).json({message: "Name needs to be capatilized!" })
    }
   };

//set up user endpoints
server.use('/api/users', usersRouter);
server.use('/api/posts', postsRouter);




server.get('/', (req, res) => {
    res.send(`\n*** You Are Now Listening To Localhost:${PORT} *** \n`);
});

module.exports = server;