const socket = io();

socket.on("msg", (...args) => {
    console.log(args);
});

socket.emit("msg", "this is a message from client");