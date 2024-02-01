const fs = require('fs')

//reading
let fileContent = fs.readFileSync('file1.txt')
console.log('data of file1 ->' + fileContent)

//writing
//fs.writeFileSync('file2.txt', 'Creating file2 and overwriting into this')

//update append
fs.appendFileSync('file2.txt', '  .............now this is appended')
console.log('Appended!')

//deleting file
//fs.unlinkSync('')

//directory
//let doesExist = fs.existsSync('dirName')      check wether directpory exits or not
//fs.mkdirSync('dirName')

// check the content inside a directory
// let folderPath = 'L:\\......'
// let folderContent = fs.readdirSync(folderPath)
// console.log(folderContent)

//remove dir
//fs.rmdirSync('dirName')