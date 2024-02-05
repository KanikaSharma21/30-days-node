const fs = require("fs");

async function writeToFile(filePath, content) {
  try {
    await fs.promises.writeFile(filePath, content);
    console.log("Data written to output1.txt");
  } catch (error) {
    console.error(`Error writing to file: ${error.message}`);
  }
}

writeToFile("../test-files/output1.txt", "Sample content.");
// Expected Output: Data written to output1.txt

writeToFile(
  "../test-files/nonexistent-folder/output.txt",
  "Content in a non-existent folder."
);
// Expected Output: Error writing to file: ENOENT: no such file or directory...
