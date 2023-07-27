// script.js
const socket = io();

function joinChat() {
  const username = document.getElementById('username').value;
  socket.emit('join', username);
  document.getElementById('username').disabled = true;
}

socket.on('chat message', (sender, message) => {
  const chatBox = document.getElementById('chat-box');
  const messageDiv = document.createElement('div');
  messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
});

function sendMessage() {
  const friend = document.getElementById('friend').value;
  const message = document.getElementById('message').value;
  socket.emit('chat message', friend, message);
  document.getElementById('message').value = '';
}
