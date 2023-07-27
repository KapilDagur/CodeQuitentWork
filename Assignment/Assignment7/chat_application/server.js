// server.js
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Serve static files from the public folder
app.use(express.static('public'));

// Store the connected users
const users = {};

io.on('connection', (socket) => {
  console.log('A user connected');

  // When a new user joins, store their username
  socket.on('join', (username) => {
    users[socket.id] = username;
    console.log(`${username} joined`);
  });

  // Handle chat messages
  socket.on('chat message', (friend, message) => {
    // Find the friend's socket id
    const friendSocketId = Object.keys(users).find(
      (socketId) => users[socketId] === friend
    );

    if (friendSocketId) {
      // Send the message to the friend
      io.to(friendSocketId).emit('chat message', users[socket.id], message);
    }
  });

  // When a user disconnects, remove them from the list of connected users
  socket.on('disconnect', () => {
    console.log('A user disconnected');
    delete users[socket.id];
  });
});

const PORT = 3000;
http.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
