// Pull in posts/users and set up express 
const express = require('express');
const postsRouter = require ('./data/helpers/postsRouter');
const usersRouter = require ('./data/helpers/usersRouter');



const server = express();;
server.use(express.json());




// write name case middleware (req, res, next) => { const {name } = req.body; if no name, 404 need name, next, else next}

//set up user endpoints
server.use('/api/users', usersRouter);
server.use('/api/posts', postsRouter);



server.get('/', (req, res) => {
    res.send(`\n*** You Are Now Listening To Localhost:${PORT} *** \n`);
});

module.exports = server;