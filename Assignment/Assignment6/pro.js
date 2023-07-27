const { exec } = require('child_process');
const readline = require('readline');


// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// Function to execute shell commands
function executeCommand(command) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error.message}`);
    } else {
      console.log(`Command output:\n${stdout}`);
      if (stderr) {
        console.error(`Command error:\n${stderr}`);
      }
    }
  });
  rl.prompt();
}

// Prompt the user for a command
function promptCommand() {
  rl.question('Enter a command (or "exit" to quit): ', (command) => {
    if (command === 'exit') {
      rl.close();
    } else {
      executeCommand(command);
    }
  });
}

// Start the program
console.log('Shell Command Executor');
promptCommand();
