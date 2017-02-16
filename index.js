// run npm start index.js
const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
    console.log(request.url);
    response.end('Hello Node.js Server!');
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        console.log('something bad happened');
        return;
    }
    console.log(`server is listening on ${port}`);
});
