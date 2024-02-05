const cp = require("child_process");

function executeCommand(command) {
    cp.exec(command,(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
    });
}
console.log("Command Output:-")
executeCommand('ls -la');
// Expected Output: (output of ls -la)

executeCommand('echo "Hello, Node.js!"');
// Expected Output: Hello, Node.js!