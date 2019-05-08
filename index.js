// code away!
const server = require('./server.js');

const port = 6660;

server.listen(port, () => {
    console.log(`\n***\n Listening to http://localhost:${port}\n*** \n`);
});