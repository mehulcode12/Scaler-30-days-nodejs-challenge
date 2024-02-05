// Problem 5: File Extension Checker
// Problem Statement: Create a function checkFileExtension(filePath, expectedExtension)
// that takes a file path and an expected file extension as input. The function should
// check if the file has the expected extension using the path module and print the result
// to the console.

// Solution:

const path = require('path');

function checkFileExtension(filePath, expectedExtension) {
    // Implementation
    const fileExtension = path.extname(filePath);
    if (fileExtension === expectedExtension) {
        console.log(`File has the expected extension: ${expectedExtension}`);
    } else {
        console.log(`File does not have the expected extension. Expected: ${expectedExtension}, Actual: ${fileExtension}`);
    }
}

checkFileExtension('test-files/file1.txt', '.txt');
// Expected Output: File has the expected extension: .txt

checkFileExtension('test-files/image.png', '.jpg');
// Expected Output: File does not have the expected extension. Expected: .jpg, Actual: .png