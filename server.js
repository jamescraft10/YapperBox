const express = require('express');
const app = express();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);

const PORT = 3000;

app.use(express.static("public"));

io.on("connection", (socket) => {
    io.emit("msg", "this is a message from the server");

    socket.on("msg", (...args) => {
        console.log(args);
    });
});

httpServer.listen(PORT, (e) => {
    if(e) console.log("Error: ", e);
    console.log(`Server listening on *:${PORT}`);
});