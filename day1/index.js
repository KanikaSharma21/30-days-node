//include fs file
const fs = require("fs");

function readFileContent(filePath) {
    fs.readFile(filePath,'utf-8',(error,data)=>{
        if(error){
            console.log(error);
            return;
        }
        console.log(data);
        return;
    })
}

// calling functions to receive the required output

readFileContent('../test-files/file1.txt');
// Expected Output: Content of file1.txt

readFileContent('../test-files/empty-file.txt');
// Expected Output: (empty string)

readFileContent('../test-files/nonexistent-file.txt');
// Expected Output: Error reading file: ENOENT: no such file or directory...