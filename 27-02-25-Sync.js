const fs = require('fs');

function readFileSync(filePath) {
    console.log("Reading file synchronously...");

    const data = fs.readFileSync(filePath, "utf8");
    console.log("File Content:\n", data);

    console.log("Synchronous function called, but file reading happens late")
};


readFileSync('example.txt');
console.log("This line runs immediately,even before the file");