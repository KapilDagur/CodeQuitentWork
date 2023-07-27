const socket = io();

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const task = {
      id: Date.now(),
      text: taskText,
    };

    socket.emit('addTask', task);
    taskInput.value = '';
  }
}

function editTask(taskId, newText) {
  const editedTask = {
    id: taskId,
    text: newText,
  };

  socket.emit('editTask', editedTask);
}

function removeTask(taskId) {
  socket.emit('removeTask', taskId);
}

socket.on('updateTasks', (tasks) => {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task) => {
    const li = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.innerText = task.text;

    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.onclick = () => {
      const newText = prompt('Edit the task:', task.text);
      if (newText !== null) {
        editTask(task.id, newText.trim());
      }
    };

    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.onclick = () => {
      removeTask(task.id);
    };

    li.appendChild(taskText);
    li.appendChild(editButton);
    li.appendChild(removeButton);
    taskList.appendChild(li);
  });
});
