const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require('socket.io')(server);
const port = 3000;

io.on("connection", socket => {
    console.log("user connected");
    socket.on("chat message", msg => {
        console.log(msg);
        io.emit("chat message", msg);
    })
})

server.listen(port, () => console.log("running on port: " + port))
