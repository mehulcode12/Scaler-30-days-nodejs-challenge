"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var fs = require("fs");
var path = require("path");

function writeToFile(filePath, content) {
    var fileName = path.basename(filePath);
    try {
        fs.writeFileSync(filePath, content, "utf-8");
        console.log("Data written to ".concat(fileName));
    }
    catch (error) {
        
        console.log("Error writing to file: ".concat(error.message));
    }

}


writeToFile("test-files/output1.txt", "Sample content."); // Expected Output: Data written to output1.txt
writeToFile("test-files/nonexistent-folder/output.txt", "Content in a non-existent folder.");  // Expected Output: Error writing to file: ENOENT: no such file or directory...

