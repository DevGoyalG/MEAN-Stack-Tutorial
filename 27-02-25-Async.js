const fs = require('fs');

function readFileAsync(filePath) {
    console.log("Reading file asynchronously...");

    fs.readFile(filePath, "utf8", (err, data) => {
        if(err){
            console.log("Error reading file", err);
            return;
        }

        console.log("File Content:\n", data);
    });

    console.log("Asynchronous function called, but file reading happens late")
}


readFileAsync('example.txt');
console.log("This line runs immediately,even before the file");