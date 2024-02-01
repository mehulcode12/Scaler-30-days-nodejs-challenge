const fs = require('fs').promises;

async function readFileContent(filePath) {
    try {
        const content = await fs.readFile(filePath, 'utf-8');
        console.log('File Content:');
        console.log(content);
    } catch (error) {
        console.error(`Error reading file: ${error.code}: ${error.message}`);
    }
}


//Test Cases
console.log()
readFileContent('file1.txt');
readFileContent('empty-file.txt');
readFileContent('nonExistant.txt');
console.log()