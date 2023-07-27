const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(__dirname + '/public'));

let tasks = [];

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.emit('updateTasks', tasks);

  socket.on('addTask', (task) => {
    tasks.push(task);
    io.emit('updateTasks', tasks);
  });

  socket.on('editTask', (editedTask) => {
    tasks = tasks.map((task) => (task.id === editedTask.id ? editedTask : task));
    io.emit('updateTasks', tasks);
  });

  socket.on('removeTask', (taskId) => {
    tasks = tasks.filter((task) => task.id !== taskId);
    io.emit('updateTasks', tasks);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
