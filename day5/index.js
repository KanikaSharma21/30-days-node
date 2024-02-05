const path = require("path");
/*
  Function checks whether the expected extension is same as of the given path's extension. 
  @param {string} filePath - The extension of the path 
  @param {string} expectedExtension - The expected extension
*/

function checkFileExtension(filePath, expectedExtension) {
    // Implementation
    const extension = path.extname(filePath);
    if(extension === expectedExtension){
        console.log(`File has the expected extension: ${expectedExtension}`);
    }else{
       console.log(`File does not have the expected extension. Expected: ${expectedExtension}, Actual: ${extension}`);
    }
}

// Different test cases:-
checkFileExtension('test-files/file1.txt', '.txt');

checkFileExtension('test-files/image.png', '.jpg');