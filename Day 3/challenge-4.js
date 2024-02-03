
const { exec } = require('child_process');


function executeCommand(command) {
  
  exec(command, (error, stdout, stderr) => {
    
    if (error) {
      console.error(`Error executing command: ${error.message}`);
      return;
    }
    
    if (stdout) {
      console.log('Command Output:');
      console.log(stdout);
    }
    
    if (stderr) {
      console.error('Command Error Output:');
      console.error(stderr);
    }
  });
}

// Testing
executeCommand("dir");
executeCommand('echo "Hello, Node.js!"');
