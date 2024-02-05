const path = require("path");
/*
  Resolve a relative path to an absolute path using path module.
  @param {string} relativePath - The path to be resolved
*/
function resolvePath(relativePath){
  // path.resolve method converts a relative path to absolute path
  const absolutePath = path.resolve(relativePath);

  // logs the absolute path
  console.log(`\n Resolved Path:${absolutePath}`);
}

// Different test cases:-

resolvePath("day4/index.js");
resolvePath('../test-files/file1.txt');
resolvePath('nonexistent-folder/file.txt');